/// <reference types="mdast" />
import { h } from "hastscript";

/**
 * Creates a highlight component for inline text highlighting.
 *
 * @param {Object} properties - The properties of the component.
 * @param {import('mdast').RootContent[]} children - The children elements of the component.
 * @returns {import('mdast').Parent} The created highlight component.
 */
export function HighlightComponent(properties, children) {
	if (!Array.isArray(children) || children.length === 0)
		return h(
			"span",
			{ class: "hidden" },
			'Invalid highlight directive. (Highlight directives must be of inline type "::highlight[text]")',
		);

	return h("span", { 
		class: "highlight-inline",
		style: "background-color: var(--highlight-bg); color: var(--highlight-color); padding: 0.125rem 0.125rem; border-radius: 0.25rem; font-weight: 500;"
	}, children);
}
