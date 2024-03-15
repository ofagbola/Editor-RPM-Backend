export const getRandomInt = (min: number, max: number) => {  
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

export const getTimestampDate = ({ date }: { date?: string | null }) => {
  const newDate = date ? new Date(date) : new Date();

  const seconds = Math.floor(newDate.getTime() / 1000);

  const nanos = newDate.getMilliseconds() * 1000000;

  return { 
    seconds: seconds.toString(), 
    nanos: nanos.toString()
  };
};