package com.tdf.core.common;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 常量配置
 * @author june
 * 2016年03月25日 20:45
 */
@ConfigurationProperties(prefix= TDFConstantsProperties.PREFIX)
@Component
public class TDFConstantsProperties {

    public static final String PREFIX = "tdf.constants";

    //网站域名
    private String domainUrl = "http://open.haier.com";

    //静态资源url
    private String staticUrl = "http://image.haier.com/sitehere/images";

    //本地静态资源url,方便本地开发使用
    private String localStaticUrl = "http://image.haier.com/sitehere/images";

    private boolean setAppUser = false;//是否模拟appuser


    public String getDomainUrl() {
        return domainUrl;
    }

    public void setDomainUrl(String domainUrl) {
        this.domainUrl = domainUrl;
    }

    public String getLocalStaticUrl() {
        return localStaticUrl;
    }

    public void setLocalStaticUrl(String localStaticUrl) {
        this.localStaticUrl = localStaticUrl;
    }

    public boolean getSetAppUser() {
        return setAppUser;
    }

    public void setSetAppUser(boolean setAppUser) {
        this.setAppUser = setAppUser;
    }

    public String getStaticUrl() {
        return staticUrl;
    }

    public void setStaticUrl(String staticUrl) {
        this.staticUrl = staticUrl;
    }

}
