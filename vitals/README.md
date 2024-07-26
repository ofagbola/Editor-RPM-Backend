This document provides the API reference for the third party wearable integration

# For FitBit
fitbit-callback --> this endpoint is fitbit's callback to editor-rpm server to return access code.

authorize-fitbit" --> this endpoint is used to authorise a fitbit user.

revoke-fitbit-token --> this endpoint revokes a fitbit users token. pass in request body accessToken and userId

fetch-spo2-from-fitbit --> this endpoint gets a fitbit users spo2 and saves it to the server. pass in query param userId

fetch-heart-rate-from-fitbit --> this endpoint gets a fitbit users heart rate and saves it to the server. pass in query param userId

fetch-user-profile-from-fitbit --> this endpoint gets a fitbit users profile. pass in query param userId

# For Apple
apple-heartrate --> this endpoint saves an apple users heart rate to the server. pass in request body userId and heartRate 

apple-spo2 --> this endpoint saves an apple users spo2 to the server. pass in request body userId and spo2 

# For Editor-RPM
fetch-user-spo2 --> this endpoint gives you a users spo2 from the server. pass in query params userId and platform 

fetch-user-heartrate --> this endpoint gives you a users heart rate from the server. pass in query params userId and platform 