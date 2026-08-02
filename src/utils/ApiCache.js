const cache = new Map();


const CACHE_TIME = 1000 * 60 * 5; // 5 minutes



export function getCachedData(key) {

  const cached = cache.get(key);


  if (!cached) {
    return null;
  }



  const expired =
    Date.now() - cached.timestamp > CACHE_TIME;



  if (expired) {

    cache.delete(key);

    return null;

  }



  return cached.data;

}





export function setCachedData(
  key,
  data
) {

  cache.set(key, {

    data,

    timestamp: Date.now(),

  });

}





export function clearCache() {

  cache.clear();

}