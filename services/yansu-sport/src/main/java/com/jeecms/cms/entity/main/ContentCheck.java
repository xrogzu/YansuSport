package com.jeecms.cms.entity.main;

import org.apache.commons.lang.StringUtils;

import com.jeecms.cms.entity.main.base.BaseContentCheck;

public class ContentCheck extends BaseContentCheck {
	private static final long serialVersionUID = 1L;
	/**
	 * 草稿
	 */
	public static final byte DRAFT = 0;
	/**
	 * 审核中
	 */
	public static final byte CHECKING = 1;
	/**
	 * 退回
	 */
	public static final byte REJECT = -1;
	/**
	 * 审核通过
	 */
	public static final byte CHECKED = 2;
	/**
	 * 回收站
	 */
	public static final byte RECYCLE = 3;
	/**
	 * 投稿
	 */
	public static final byte CONTRIBUTE = 4;
	/**
	 * 归档
	 */
	public static final byte PIGEONHOLE = 5;
	
	/**
	 * 达标
	 */
	public static final byte GOAL = 6;
	
	/**
	 * 完成
	 */
	public static final byte COMPLETED = 7;
	
	/**
	 * 终审通过
	 */
	public static final byte FINAL_CHECKED = 8;

	public void init() {
		byte zero = 0;
		if (getCheckStep() == null) {
			setCheckStep(zero);
		}
		if (getRejected() == null) {
			setRejected(false);
		}
	}

	public void blankToNull() {
		if (StringUtils.isBlank(getCheckOpinion())) {
			setCheckOpinion(null);
		}
	}

	/* [CONSTRUCTOR MARKER BEGIN] */
	public ContentCheck () {
		super();
	}

	/**
	 * Constructor for primary key
	 */
	public ContentCheck (java.lang.Integer id) {
		super(id);
	}

	/**
	 * Constructor for required fields
	 */
	public ContentCheck (
		java.lang.Integer id,
		java.lang.Byte checkStep,
		java.lang.Boolean rejected) {

		super (
			id,
			checkStep,
			rejected);
	}

	/* [CONSTRUCTOR MARKER END] */

}