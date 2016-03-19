package com.tdf.core.cache;

import com.season.plugin.redis.RedisKit;

import java.util.List;

/**
 * 默认缓存实现
 * @author june
 * 2015年12月23日 14:29
 */
public class DefaultCacheImpl implements ICache{

    @Override
    public <T> T get(String key, Class<T> clazz) {
        return RedisKit.get(key,clazz);
    }

    @Override
    public <T> List<T> getList(String key, Class<T> clazz) {
        return RedisKit.getList(key,clazz);
    }

    @Override
    public String set(String key, Object obj, int expire) {
        return RedisKit.set(key,obj,expire);
    }

    @Override
    public String set(String key, Object obj) {
        return RedisKit.set(key,obj);
    }

    @Override
    public String setString(String key, String value) {
        return RedisKit.setString(key,value);
    }

    @Override
    public String setString(String key, String value, int expire) {
        return RedisKit.setString(key,value,expire);
    }

    @Override
    public Long setStringIfNotExists(String key, String value) {
        return RedisKit.setStringIfNotExists(key,value);
    }

    @Override
    public String getString(String key) {
        return RedisKit.getString(key);
    }

    @Override
    public Long setIfNotExists(String key, Object obj) {
        return RedisKit.setIfNotExists(key,obj);
    }

    @Override
    public Long delKey(String key) {
        return RedisKit.delKey(key);
    }

    @Override
    public Long delKeys(String[] keys) {
        return RedisKit.delKeys(keys);
    }

    @Override
    public long delKeysLike(String likeKey) {
        return RedisKit.delKeysLike(likeKey);
    }
}
