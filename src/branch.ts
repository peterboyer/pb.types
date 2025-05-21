/**
 * @description
 * Intended for tests where stub branches are needed, e.g. testing return
 * types.
 *
 * @example
 * ```
 * function example(): string | number | undefined {
 *   if (branch()) {
 *    return "abc";
 *   }
 *
 *   if (branch()) {
 *    return 12345;
 *   }
 *
 *   return undefined;
 * };
 * ```
 */
export function branch(): boolean {
	return Math.random() === 1;
}
