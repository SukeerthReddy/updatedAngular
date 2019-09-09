package com.suki.core.config;

import javax.servlet.Filter;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import com.suki.core.filters.CrossProxyFilter;

public class WebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	protected Class<?>[] getRootConfigClasses() {
		return new Class[] { AppConfig.class };
	}

	protected Class<?>[] getServletConfigClasses() {
		return new Class[] { WebConfig.class };
	}

	protected String[] getServletMappings() {
		return new String[] { "/" };
	}

	protected Filter[] getServletFilters() {
		final Filter[] filters = new Filter[1];
		filters[0] = new CrossProxyFilter();
		return filters;
	}

}
