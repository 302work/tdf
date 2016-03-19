package com.tdf.core.exception;

/**
 * 请求页面时发生异常,抛出该异常
 * @author june
 * 2015年12月23日 14:52
 */
public class PageException extends RuntimeException{

    public PageException(String message) {
        super(message);
    }

    public PageException(Throwable cause) {
        super(cause);
    }

    public PageException(String message, Throwable cause) {
        super(message, cause);
    }



}
