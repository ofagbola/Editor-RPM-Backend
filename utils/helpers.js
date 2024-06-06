


function generateCodeVerifier() {
    return crypto.randomBytes(32).toString("hex");
  }
  
  function base64URLEncode(str) {
    return str
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");
  }
  
  function sha256(buffer) {
    return crypto.createHash("sha256").update(buffer).digest();
  }
  
  function generateCodeChallenge(codeVerifier) {
    return base64URLEncode(sha256(Buffer.from(codeVerifier)));
  }
  
  function generateNonce(length = 32) {
    return crypto.randomBytes(length).toString("hex");
  }
  
  function generateSignature(
    method,
    url,
    params,
    consumerSecret,
    tokenSecret = ""
  ) {
    // 1. Percent encode every key and value that will be signed
    const encodedParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [
        encodeURIComponent(key),
        encodeURIComponent(value),
      ])
    );
  
    // 2. Sort the list of parameters alphabetically [RFC 5849 Section 3.4.1.3.2]
    const sortedParams = Object.keys(encodedParams)
      .sort()
      .reduce((obj, key) => {
        obj[key] = encodedParams[key];
        return obj;
      }, {});
  
    // 3. Concatenate the request elements into a single string
    const baseString = [
      method.toUpperCase(),
      encodeURIComponent(url),
      encodeURIComponent(queryString.stringify(sortedParams)),
    ].join("&");
  
    // 4. Use the consumer secret and token secret to generate the signature
    const signingKey = `${encodeURIComponent(
      consumerSecret
    )}&${encodeURIComponent(tokenSecret)}`;
    const signature = crypto
      .createHmac("sha1", signingKey)
      .update(baseString)
      .digest("base64");
  
    return signature;
  }




  module.exports = {
    generateCodeChallenge,
    generateNonce,
    generateSignature,
    generateCodeVerifier,
    base64URLEncode
  };