// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    'home': RouteRecordInfo<'home', '/', Record<never, never>, Record<never, never>>,
    '/[name]': RouteRecordInfo<'/[name]', '/:name', { name: ParamValue<true> }, { name: ParamValue<false> }>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/@[profileId]': RouteRecordInfo<'/@[profileId]', '/@:profileId', { profileId: ParamValue<true> }, { profileId: ParamValue<false> }>,
    '/about': RouteRecordInfo<'/about', '/about', Record<never, never>, Record<never, never>>,
    '/about.extra.nested': RouteRecordInfo<'/about.extra.nested', '/about/extra/nested', Record<never, never>, Record<never, never>>,
    '/articles': RouteRecordInfo<'/articles', '/articles', Record<never, never>, Record<never, never>>,
    '/articles/': RouteRecordInfo<'/articles/', '/articles', Record<never, never>, Record<never, never>>,
    '/articles/[id]': RouteRecordInfo<'/articles/[id]', '/articles/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/articles/[id]+': RouteRecordInfo<'/articles/[id]+', '/articles/:id+', { id: ParamValueOneOrMore<true> }, { id: ParamValueOneOrMore<false> }>,
    '/custom-definePage': RouteRecordInfo<'/custom-definePage', '/custom-definePage', Record<never, never>, Record<never, never>>,
    'a rebel': RouteRecordInfo<'a rebel', '/custom-name', Record<never, never>, Record<never, never>>,
    '/custom.page': RouteRecordInfo<'/custom.page', '/custom/page', Record<never, never>, Record<never, never>>,
    '/deep/nesting/works/[[files]]+': RouteRecordInfo<'/deep/nesting/works/[[files]]+', '/deep/nesting/works/:files*', { files?: ParamValueZeroOrMore<true> }, { files?: ParamValueZeroOrMore<false> }>,
    '/deep/nesting/works/at-root-but-from-nested': RouteRecordInfo<'/deep/nesting/works/at-root-but-from-nested', '/at-root-but-from-nested', Record<never, never>, Record<never, never>>,
    'deep the most rebel': RouteRecordInfo<'deep the most rebel', '/deep-most-rebel', Record<never, never>, Record<never, never>>,
    '/deep/nesting/works/custom-path': RouteRecordInfo<'/deep/nesting/works/custom-path', '/deep-surprise-:id(\d+)', Record<never, never>, Record<never, never>>,
    'deep a rebel': RouteRecordInfo<'deep a rebel', '/deep/nesting/works/custom-name', Record<never, never>, Record<never, never>>,
    '/docs/:lang/real/': RouteRecordInfo<'/docs/:lang/real/', '/docs/:lang/real', Record<never, never>, Record<never, never>>,
    '/from-root': RouteRecordInfo<'/from-root', '/from-root', Record<never, never>, Record<never, never>>,
    'the most rebel': RouteRecordInfo<'the most rebel', '/most-rebel', Record<never, never>, Record<never, never>>,
    '/multiple-[a]-[b]-params': RouteRecordInfo<'/multiple-[a]-[b]-params', '/multiple-:a-:b-params', { a: ParamValue<true>, b: ParamValue<true> }, { a: ParamValue<false>, b: ParamValue<false> }>,
    '/my-optional-[[slug]]': RouteRecordInfo<'/my-optional-[[slug]]', '/my-optional-:slug?', { slug?: ParamValueZeroOrOne<true> }, { slug?: ParamValueZeroOrOne<false> }>,
    '/n-[[n]]/': RouteRecordInfo<'/n-[[n]]/', '/n-:n?', { n?: ParamValueZeroOrOne<true> }, { n?: ParamValueZeroOrOne<false> }>,
    '/n-[[n]]/[[more]]+/': RouteRecordInfo<'/n-[[n]]/[[more]]+/', '/n-:n?/:more*', { n?: ParamValueZeroOrOne<true>, more?: ParamValueZeroOrMore<true> }, { n?: ParamValueZeroOrOne<false>, more?: ParamValueZeroOrMore<false> }>,
    '/n-[[n]]/[[more]]+/[final]': RouteRecordInfo<'/n-[[n]]/[[more]]+/[final]', '/n-:n?/:more*/:final', { n?: ParamValueZeroOrOne<true>, more?: ParamValueZeroOrMore<true>, final: ParamValue<true> }, { n?: ParamValueZeroOrOne<false>, more?: ParamValueZeroOrMore<false>, final: ParamValue<false> }>,
    '/not-used': RouteRecordInfo<'/not-used', '/not-used', Record<never, never>, Record<never, never>>,
    '/partial-[name]': RouteRecordInfo<'/partial-[name]', '/partial-:name', { name: ParamValue<true> }, { name: ParamValue<false> }>,
    '/custom-path': RouteRecordInfo<'/custom-path', '/surprise-:id(\d+)', Record<never, never>, Record<never, never>>,
    '/users/': RouteRecordInfo<'/users/', '/users', Record<never, never>, Record<never, never>>,
    '/users/[id]': RouteRecordInfo<'/users/[id]', '/users/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/users/[id].edit': RouteRecordInfo<'/users/[id].edit', '/users/:id/edit', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/users/nested.route.deep': RouteRecordInfo<'/users/nested.route.deep', '/users/nested/route/deep', Record<never, never>, Record<never, never>>,
    '/vuefire-tests/get-doc': RouteRecordInfo<'/vuefire-tests/get-doc', '/vuefire-tests/get-doc', Record<never, never>, Record<never, never>>,
    '/with-extension': RouteRecordInfo<'/with-extension', '/with-extension', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
