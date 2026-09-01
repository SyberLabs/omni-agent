// ============================================
// The surface's only borrowed helper, inlined at extraction. Identical
// output to the OmniOS `generateId` it replaces (`substr(2, 9)` on the
// base-36 fraction is `slice(2, 11)`), so existing tab ids keep their shape.
// ============================================

export function generateId(prefix: string = 'id'): string {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}
