package services

import (
	"context"
	"fmt"
	"github.com/redis/go-redis/v9"
)



func GetDataCached(val string) {
	ctx := context.Background()
	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379", // Update with your Redis server address
		Password: "",               // Update with your Redis password if applicable
		DB:       0,
	})
	// Ensure that the connection is properly closed gracefully
	defer rdb.Close()

	
		_, err := rdb.Get(ctx, "query").Result()
		if err != nil {
			// Database query was not cached yet
			// Make database call and cache the value
			fmt.Printf("\tAfter query with result %s\n", err)
	
		}
	
}

func SetCacheData(val string){
	ctx := context.Background()
	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379", // Update with your Redis server address
		Password: "",               // Update with your Redis password if applicable
		DB:       0,
	})
	// Ensure that the connection is properly closed gracefully
	defer rdb.Close()

	// set redis
	rdb.Set(ctx, "query", val, 0)
	
}
