package com.tdf.core.cache;

import java.util.List;

/**
 * @author june
 *         2015年12月23日 14:25
 */
public interface ICache {

    <T> T get(String key, Class<T> clazz);
    <T> List<T> getList(String key, Class<T> clazz);
    String set(String key, Object obj, int expire);
    String set(String key, Object obj);
    String setString(String key, String value);
    String setString(final String key, final String value, final int expire);
    Long setStringIfNotExists(final String key, final String value);
    String getString(String key);
    /**
     * 将 key 的值设为 obj ，当且仅当 key 不存在。若给定的 key 已经存在，则 setIfNotExists 不做任何动作。
     * @param key
     * @param obj
     * @return 设置成功，返回 1 。设置失败，返回 0 。
     */
    Long setIfNotExists(String key, Object obj);

    /**
     * 删除
     * @param key
     * @return 删除成功的条数
     */
    Long delKey(final String key);

    Long delKeys(final String[] keys);
    long delKeysLike(final String likeKey);
}
