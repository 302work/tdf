package com.tdf.twc.config;

import com.season.core.spring.SeasonServletInitializer;

/**
 * @author june
 * 2015年12月02日 23:10
 */
public class ServletInitializer extends SeasonServletInitializer {

    @Override
    protected Class<?> getAppClass() {
        return TwcApp.class;
    }
}
