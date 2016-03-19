package com.tdf.twc.config;

import com.season.core.spring.SeasonRunner;
import com.tdf.core.config.TDFApp;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

/**
 * @author june
 * 2015年03月19日 21:38
 */
@EnableRedisHttpSession
public class TwcApp extends TDFApp{

    public static void main(String[] args) {
        SeasonRunner.run(TwcApp.class);
    }

}
