package com.tdf.core.handler;

import com.season.handler.Handler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author june
 * 2015年12月02日 10:24
 */
@Component
public class ContextHandler extends Handler {

    @Override
    public void handle(String target, HttpServletRequest request, HttpServletResponse response, boolean[] isHandled) {

        nextHandler.handle(target, request, response, isHandled);
    }

}
