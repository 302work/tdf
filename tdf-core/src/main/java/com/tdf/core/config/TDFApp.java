package com.tdf.core.config;

import com.alibaba.druid.filter.stat.StatFilter;
import com.season.config.*;
import com.season.core.db.tx.TxByRegex;
import com.season.core.spring.SeasonApplication;
import com.tdf.core.cache.DefaultCacheImpl;
import com.tdf.core.cache.ICache;
import com.tdf.core.handler.ContextHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;

/**
 * 所有模块的启动类都继承该类
 * @author june
 * 2016年03月19日 16:51
 */
public class TDFApp extends SeasonApplication {

    @Autowired
    ContextHandler contextHandler;

    @Autowired
    ConstantsProperties constantsProperties;


    public void configHandler(Handlers me) {
        me.add(contextHandler);
    }

    public void configConstant(Constants me) {
        super.configConstant(me);
    }

    public void configPlugin(Plugins me) {
//        me.add(new RedisPlugin());
    }

    public void configInterceptor(Interceptors me){
        //构建出错拦截器
//        ExceptionInterceptor exceptionInterceptor = new ExceptionInterceptor();
//
//        //默认所有异常都走MyExceptionRender处理
//        exceptionInterceptor.setDefault(new ActionExceptionRender("系统内部错误,请稍后再试!"));
//
//        //对于DbException异常，走MyExceptionRender（你可以自己写自己的） 处理，可以添加多个
//        exceptionInterceptor.addMapping(PageException.class,new PageExceptionRender(constantsProperties.getError500View()));

//        me.addGlobalActionInterceptor(exceptionInterceptor);

        me.addGlobalActionInterceptor(new TxByRegex(
                ".*save.*|.*update.*|.*delete.*|.*insert.*|.*add.*|.*remove.*|.*execute.*|.*audit.*|.*reset.*|.*commit.*"));
    }

    @Bean
    public ICache bbsCache(){
        return new DefaultCacheImpl();
    }

    /**
     * 慢sql统计
     * @return
     */
    @Bean
    public StatFilter statFilter(){
        StatFilter statFilter = new StatFilter();
        statFilter.setLogSlowSql(true);
        statFilter.setSlowSqlMillis(2000);
        statFilter.setMergeSql(true);
        return statFilter;
    }
}
