'use strict';

/**
 * Object order sorting
 *
 * @param {Object} a
 * @param {Object} b
 *
 * @return {number}
 */
export const prioritySort = (a, b) => {
	if (a.priority > b.priority) {
		return 1;
	}

	if (a.priority < b.priority) {
		return -1;
	}

	return 0;
};
