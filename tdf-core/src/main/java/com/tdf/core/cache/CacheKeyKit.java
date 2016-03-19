package com.tdf.core.cache;

import org.springframework.util.Assert;

/**
 * @author june
 * 2015年12月24日 15:03
 */
public class CacheKeyKit {

    /**
     * 缓存UserActionStat的key
     * @param idsUserId
     * @return
     */
    public static String getUserActionStatKey(Integer idsUserId){
        Assert.notNull(idsUserId);
        return "bbsUser_"+idsUserId.toString();
    }


}
