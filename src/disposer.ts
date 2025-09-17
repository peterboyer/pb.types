/**
 * @description
 * Describes a cleanup return function commonly returned
 * from listeners and subscriptions.
 *
 * @example
 * ```ts
 * function subscribe(): Disposer {
 *   // Start listener/subscription.
 *   return () => {
 *     // Stop listener/subscription.
 *   };
 * }
 * ```
 */
export type Disposer = () => void;
