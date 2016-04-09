package com.tdf.core.handler;

import com.season.handler.Handler;
import com.tdf.core.common.TDFConstantsProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author june
 * 2015年12月02日 10:24
 */
@Component
public class ContextHandler extends Handler {

    @Autowired
    private TDFConstantsProperties constants;

    @Override
    public void handle(String target, HttpServletRequest request, HttpServletResponse response, boolean[] isHandled) {
        request.setAttribute("ctx", request.getContextPath());
        request.setAttribute("PATH", constants.getStaticUrl());
        request.setAttribute("LOCAL_PATH", constants.getLocalStaticUrl());
        request.setAttribute("DOMAIN", constants.getDomainUrl());
        nextHandler.handle(target, request, response, isHandled);
    }

}
