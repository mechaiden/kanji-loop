module.exports = [
"[project]/src/app/import/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImportPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/image.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ImportPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("pick");
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [setName, setSetName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const addFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (files)=>{
        setError(null);
        const picked = [
            ...files
        ].filter((file)=>file.type.startsWith("image/"));
        if (!picked.length) {
            setError("Those don't look like image files.");
            return;
        }
        try {
            const prepared = await Promise.all(picked.map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareImage"]));
            setImages((current)=>[
                    ...current,
                    ...prepared
                ].slice(0, 8));
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : "Couldn't read that image.");
        }
    }, []);
    async function extract() {
        setStage("reading");
        setError(null);
        try {
            const response = await fetch("/api/extract", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    images: images.map(({ media_type, data })=>({
                            media_type,
                            data
                        }))
                })
            });
            const payload = await response.json();
            if (!response.ok) throw new Error(payload.error ?? "Extraction failed.");
            setSetName(payload.setName ?? "");
            setItems(payload.items.map((item)=>({
                    ...item,
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newId"])()
                })));
            setStage("review");
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : "Extraction failed.");
            setStage("pick");
        }
    }
    function updateItem(id, patch) {
        setItems((current)=>current.map((item)=>item.id === id ? {
                    ...item,
                    ...patch
                } : item));
    }
    function save() {
        const cleaned = items.filter((item)=>item.term.trim() && item.meaning.trim());
        if (!cleaned.length) {
            setError("Keep at least one word with both a term and a meaning.");
            return;
        }
        try {
            const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSet"])(setName, cleaned);
            router.push(`/sets/${set.id}`);
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : "Couldn't save the set.");
        }
    }
    if (stage === "reading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-24 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jp mb-6 animate-pulse text-4xl text-accent",
                    children: "読み込み中"
                }, void 0, false, {
                    fileName: "[project]/src/app/import/page.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-medium",
                    children: "Reading your page…"
                }, void 0, false, {
                    fileName: "[project]/src/app/import/page.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-muted",
                    children: "Claude is transcribing the kanji, readings, and meanings. This usually takes 20–40 seconds."
                }, void 0, false, {
                    fileName: "[project]/src/app/import/page.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/import/page.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this);
    }
    if (stage === "review") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-semibold tracking-tight",
                    children: "Check the transcription"
                }, void 0, false, {
                    fileName: "[project]/src/app/import/page.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-muted",
                    children: [
                        items.length,
                        " words found. Fix anything that came out wrong — a bad reading here becomes a wrong answer you have to unlearn later."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/import/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "mt-6 block",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-muted",
                            children: "Set name"
                        }, void 0, false, {
                            fileName: "[project]/src/app/import/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: setName,
                            onChange: (event)=>setSetName(event.target.value),
                            placeholder: "Genki Lesson 3",
                            className: "focus-ring mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/import/page.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/import/page.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 overflow-x-auto rounded-xl border border-border",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full min-w-3xl border-collapse text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-surface text-left text-muted",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-3 py-2 font-medium",
                                            children: "Term"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/import/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-3 py-2 font-medium",
                                            children: "Reading"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/import/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-3 py-2 font-medium",
                                            children: "Meaning"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/import/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-3 py-2 font-medium",
                                            children: "Part of speech"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/import/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "w-10 px-3 py-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/import/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/import/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/import/page.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-t border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-2 py-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CellInput, {
                                                    japanese: true,
                                                    value: item.term,
                                                    onChange: (term)=>updateItem(item.id, {
                                                            term
                                                        }),
                                                    "aria-label": "Term"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/import/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/import/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-2 py-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CellInput, {
                                                    japanese: true,
                                                    value: item.reading,
                                                    onChange: (reading)=>updateItem(item.id, {
                                                            reading
                                                        }),
                                                    "aria-label": "Reading"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/import/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/import/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-2 py-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CellInput, {
                                                    value: item.meaning,
                                                    onChange: (meaning)=>updateItem(item.id, {
                                                            meaning
                                                        }),
                                                    "aria-label": "Meaning"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/import/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/import/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-2 py-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CellInput, {
                                                    value: item.partOfSpeech ?? "",
                                                    onChange: (partOfSpeech)=>updateItem(item.id, {
                                                            partOfSpeech
                                                        }),
                                                    "aria-label": "Part of speech"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/import/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/import/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-2 py-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    "aria-label": `Remove ${item.term}`,
                                                    onClick: ()=>setItems((current)=>current.filter((other)=>other.id !== item.id)),
                                                    className: "focus-ring rounded p-1 text-muted hover:text-wrong",
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/import/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/import/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/app/import/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/import/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/import/page.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/import/page.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-sm text-wrong",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/import/page.tsx",
                    lineNumber: 191,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: save,
                            className: "focus-ring rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90",
                            children: [
                                "Save ",
                                items.length,
                                " words"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/import/page.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setItems((current)=>[
                                        ...current,
                                        {
                                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newId"])(),
                                            term: "",
                                            reading: "",
                                            meaning: ""
                                        }
                                    ]),
                            className: "focus-ring rounded-xl border border-border px-4 py-3 text-sm text-muted hover:text-foreground",
                            children: "Add a row"
                        }, void 0, false, {
                            fileName: "[project]/src/app/import/page.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/import/page.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/import/page.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold tracking-tight",
                children: "Import a page"
            }, void 0, false, {
                fileName: "[project]/src/app/import/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-muted",
                children: "Add up to 8 images of one vocabulary list. Straight-on, well-lit shots read best — and a flatter page beats a higher resolution."
            }, void 0, false, {
                fileName: "[project]/src/app/import/page.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDragOver: (event)=>{
                    event.preventDefault();
                    setDragging(true);
                },
                onDragLeave: ()=>setDragging(false),
                onDrop: (event)=>{
                    event.preventDefault();
                    setDragging(false);
                    void addFiles(event.dataTransfer.files);
                },
                onPaste: (event)=>{
                    if (event.clipboardData.files.length) {
                        void addFiles(event.clipboardData.files);
                    }
                },
                className: `mt-6 rounded-2xl border-2 border-dashed p-10 text-center transition-colors ${dragging ? "border-accent bg-accent/5" : "border-border"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted",
                        children: "Drag images here, paste from the clipboard, or"
                    }, void 0, false, {
                        fileName: "[project]/src/app/import/page.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>inputRef.current?.click(),
                        className: "focus-ring mt-3 rounded-xl border border-border bg-surface px-5 py-2.5 font-medium transition-colors hover:border-accent/50",
                        children: "Choose files"
                    }, void 0, false, {
                        fileName: "[project]/src/app/import/page.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "file",
                        accept: "image/*",
                        multiple: true,
                        className: "hidden",
                        onChange: (event)=>{
                            if (event.target.files) void addFiles(event.target.files);
                            event.target.value = "";
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/import/page.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/import/page.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-5 grid grid-cols-4 gap-3",
                children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "group relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: image.previewUrl,
                                alt: image.name,
                                className: "aspect-3/4 w-full rounded-lg border border-border object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/import/page.tsx",
                                lineNumber: 272,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": `Remove ${image.name}`,
                                onClick: ()=>setImages((current)=>current.filter((_, i)=>i !== index)),
                                className: "focus-ring absolute top-1 right-1 rounded-md bg-background/85 px-1.5 py-0.5 text-xs",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/import/page.tsx",
                                lineNumber: 277,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${image.name}-${index}`, true, {
                        fileName: "[project]/src/app/import/page.tsx",
                        lineNumber: 270,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/import/page.tsx",
                lineNumber: 268,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-sm text-wrong",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/import/page.tsx",
                lineNumber: 292,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: !images.length,
                onClick: extract,
                className: "focus-ring mt-6 w-full rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-35",
                children: [
                    "Read ",
                    images.length || "",
                    " ",
                    images.length === 1 ? "page" : "pages"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/import/page.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/import/page.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
function CellInput({ value, onChange, japanese = false, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        ...rest,
        value: value,
        onChange: (event)=>onChange(event.target.value),
        className: `focus-ring w-full rounded bg-transparent px-2 py-1.5 hover:bg-surface ${japanese ? "jp text-base" : ""}`
    }, void 0, false, {
        fileName: "[project]/src/app/import/page.tsx",
        lineNumber: 318,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/image.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prepareImage",
    ()=>prepareImage
]);
"use client";
/**
 * Claude downsamples images whose long edge exceeds ~1568px, so sending
 * anything larger just costs upload time. We re-encode to JPEG at that size:
 * a 12MP phone photo drops from ~5MB to ~250KB with no loss of legibility for
 * printed text.
 */ const MAX_EDGE = 1568;
const JPEG_QUALITY = 0.85;
async function prepareImage(file) {
    let bitmap;
    try {
        bitmap = await createImageBitmap(file);
    } catch  {
        throw new Error(`Couldn't read "${file.name}". Browsers can't decode HEIC — export it as JPEG or PNG first.`);
    }
    const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
    const width = Math.round(bitmap.width * scale);
    const height = Math.round(bitmap.height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Your browser blocked canvas rendering.");
    // White underlay: textbook scans are often transparent PNGs, and JPEG has no
    // alpha channel, so without this the page would come out black.
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
    context.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();
    const dataUrl = canvas.toDataURL("image/jpeg", JPEG_QUALITY);
    return {
        media_type: "image/jpeg",
        data: dataUrl.slice(dataUrl.indexOf(",") + 1),
        previewUrl: dataUrl,
        name: file.name
    };
}
}),
"[project]/src/lib/japanese.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canonicalKana",
    ()=>canonicalKana,
    "gradeEnglish",
    ()=>gradeEnglish,
    "gradeJapanese",
    ()=>gradeJapanese,
    "hasKanji",
    ()=>hasKanji,
    "romajiOf",
    ()=>romajiOf,
    "splitMeanings",
    ()=>splitMeanings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wanakana$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wanakana/esm/index.js [app-ssr] (ecmascript)");
;
function hasKanji(term) {
    return [
        ...term
    ].some((char)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wanakana$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isKanji"])(char));
}
/**
 * The vowel a kana ends on ("a" | "i" | "u" | "e" | "o"), or null for ん and
 * anything that isn't a kana. Used to expand long-vowel marks.
 */ function vowelOf(kana) {
    const romaji = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wanakana$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRomaji"])(kana);
    const last = romaji.slice(-1);
    return "aiueo".includes(last) ? last : null;
}
const VOWEL_KANA = {
    a: "あ",
    i: "い",
    u: "う",
    e: "え",
    o: "お"
};
function canonicalKana(input) {
    // passRomaji: false means romaji gets converted too, which is what we want —
    // the user may type either script.
    let text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wanakana$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHiragana"])(input.trim().toLowerCase(), {
        passRomaji: false
    });
    // Drop anything that isn't a sound: spaces, punctuation, interpuncts, tildes.
    text = text.replace(/[\s　.,、。・〜~！!？?（）()「」『』]/g, "");
    // Expand ー into the vowel it lengthens: こーひー -> こおひい
    let expanded = "";
    for (const char of text){
        if (char === "ー" || char === "－" || char === "―") {
            const vowel = vowelOf(expanded.slice(-1));
            if (vowel) expanded += VOWEL_KANA[vowel];
            continue;
        }
        expanded += char;
    }
    // う after an o-sound and い after an e-sound are long vowels in practice:
    // とうきょう -> とおきょお, せんせい -> せんせえ
    let collapsed = "";
    for (const char of expanded){
        const prevVowel = vowelOf(collapsed.slice(-1));
        if (char === "う" && prevVowel === "o") {
            collapsed += "お";
        } else if (char === "い" && prevVowel === "e") {
            collapsed += "え";
        } else {
            collapsed += char;
        }
    }
    // "tsuzuku" and "tsuduku" should both match つづく.
    return collapsed.replace(/ぢ/g, "じ").replace(/づ/g, "ず");
}
/** Levenshtein edit distance, capped implicitly by the shorter string. */ function editDistance(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    let prev = Array.from({
        length: b.length + 1
    }, (_, i)=>i);
    for(let i = 1; i <= a.length; i++){
        const row = [
            i
        ];
        for(let j = 1; j <= b.length; j++){
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            row[j] = Math.min(row[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
        }
        prev = row;
    }
    return prev[b.length];
}
/**
 * Strip the noise that makes two correct English glosses look different:
 * articles, the "to" of an infinitive, parentheticals, punctuation.
 */ function canonicalEnglish(input) {
    return input.trim().toLowerCase().replace(/\([^)]*\)/g, "").replace(/[.,;:!?"'’`\-–—]/g, " ").replace(/\b(?:a|an|the)\b/g, " ").replace(/^\s*to\s+/, "").replace(/\s+/g, " ").trim();
}
function splitMeanings(meaning) {
    return meaning.split(/[;,/]|\bor\b/g).map((part)=>part.trim()).filter(Boolean);
}
/** True when `needle` appears in `haystack` as a run of consecutive whole words. */ function containsPhrase(haystack, needle) {
    if (!needle.length || needle.length > haystack.length) return false;
    for(let start = 0; start <= haystack.length - needle.length; start++){
        if (needle.every((word, offset)=>haystack[start + offset] === word)) {
            return true;
        }
    }
    return false;
}
function gradeJapanese(given, accepts) {
    const answer = given.trim();
    if (!answer) return "incorrect";
    // An exact match on the written form (kanji included) is always correct.
    if (accepts.some((accept)=>accept.trim() === answer)) return "correct";
    const canonical = canonicalKana(answer);
    if (!canonical) return "incorrect";
    const targets = accepts.map(canonicalKana).filter(Boolean);
    if (targets.includes(canonical)) return "correct";
    // One slip in a word of reasonable length is "almost" — worth a retype
    // rather than being marked wrong outright.
    const closest = Math.min(...targets.map((t)=>editDistance(canonical, t)));
    const shortest = Math.min(...targets.map((t)=>t.length));
    if (closest === 1 && shortest >= 3) return "almost";
    return "incorrect";
}
function gradeEnglish(given, meaning) {
    const answer = canonicalEnglish(given);
    if (!answer) return "incorrect";
    const senses = splitMeanings(meaning).map(canonicalEnglish).filter(Boolean);
    const targets = senses.length ? senses : [
        canonicalEnglish(meaning)
    ];
    if (targets.includes(answer)) return "correct";
    // Accept a sense the user got right plus extra words they added, e.g.
    // "to eat something" for "to eat". Matching on whole words rather than
    // substrings keeps "teacherr" from counting as "teacher".
    const answerWords = answer.split(" ");
    if (targets.some((t)=>containsPhrase(answerWords, t.split(" ")))) {
        return "correct";
    }
    const closest = Math.min(...targets.map((t)=>editDistance(answer, t)));
    const shortest = Math.min(...targets.map((t)=>t.length));
    if (closest <= Math.max(1, Math.floor(shortest / 6)) && shortest >= 4) {
        return "almost";
    }
    return "incorrect";
}
function romajiOf(kana) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wanakana$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRomaji"])(kana);
}
}),
"[project]/src/lib/learn/engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ROUND_SIZE",
    ()=>ROUND_SIZE,
    "applyGrade",
    ()=>applyGrade,
    "buildQuestion",
    ()=>buildQuestion,
    "gradeAnswer",
    ()=>gradeAnswer,
    "initialProgress",
    ()=>initialProgress,
    "initialState",
    ()=>initialState,
    "isMastered",
    ()=>isMastered,
    "ladderFor",
    ()=>ladderFor,
    "masterySummary",
    ()=>masterySummary,
    "nextQuestion",
    ()=>nextQuestion,
    "syncProgress",
    ()=>syncProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/japanese.ts [app-ssr] (ecmascript)");
;
const ROUND_SIZE = 7;
function ladderFor(item) {
    const readingIsDistinct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasKanji"])(item.term) && item.reading.trim() !== item.term.trim();
    return readingIsDistinct ? [
        "mc-jp-en",
        "mc-reading",
        "mc-en-jp",
        "type-reading",
        "type-en",
        "type-jp"
    ] : [
        "mc-jp-en",
        "mc-en-jp",
        "type-en",
        "type-jp"
    ];
}
/** Hardest rungs, cycled forever once an item is mastered. */ const REVIEW_KINDS = [
    "type-en",
    "type-jp",
    "type-reading"
];
function isMastered(item, state) {
    return state.level >= ladderFor(item).length;
}
function initialState(itemId, index) {
    return {
        itemId,
        level: 0,
        // Stagger the initial due times so the first round isn't in set order.
        dueAt: index,
        seen: 0,
        correct: 0,
        incorrect: 0,
        streak: 0
    };
}
function initialProgress(setId, items) {
    const states = {};
    items.forEach((item, index)=>{
        states[item.id] = initialState(item.id, index);
    });
    return {
        setId,
        states,
        clock: 0,
        questionsAnswered: 0,
        updatedAt: Date.now()
    };
}
function syncProgress(progress, items) {
    const states = {};
    items.forEach((item, index)=>{
        states[item.id] = progress.states[item.id] ?? initialState(item.id, progress.clock + index);
    });
    return {
        ...progress,
        states
    };
}
function shuffle(input) {
    const out = [
        ...input
    ];
    for(let i = out.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [out[i], out[j]] = [
            out[j],
            out[i]
        ];
    }
    return out;
}
/**
 * Pick distractors for a multiple-choice question. Drawing from the same set
 * keeps them plausible — they're words from the same textbook chapter.
 */ function distractors(items, target, project, count = 3) {
    const targetValue = project(target);
    const pool = new Set();
    for (const item of shuffle(items)){
        if (item.id === target.id) continue;
        const value = project(item);
        if (!value || value === targetValue) continue;
        pool.add(value);
        if (pool.size >= count) break;
    }
    return [
        ...pool
    ];
}
function primaryMeaning(item) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitMeanings"])(item.meaning)[0] ?? item.meaning;
}
function buildQuestion(item, kind, items) {
    switch(kind){
        case "mc-jp-en":
            {
                const correct = primaryMeaning(item);
                return {
                    itemId: item.id,
                    kind,
                    prompt: item.term,
                    hint: item.partOfSpeech,
                    choices: shuffle([
                        correct,
                        ...distractors(items, item, primaryMeaning)
                    ]),
                    correctChoice: correct,
                    answerLabel: item.meaning
                };
            }
        case "mc-en-jp":
            {
                return {
                    itemId: item.id,
                    kind,
                    prompt: item.meaning,
                    hint: item.partOfSpeech,
                    choices: shuffle([
                        item.term,
                        ...distractors(items, item, (other)=>other.term)
                    ]),
                    correctChoice: item.term,
                    answerLabel: item.term,
                    answerReading: item.reading
                };
            }
        case "mc-reading":
            {
                return {
                    itemId: item.id,
                    kind,
                    prompt: item.term,
                    hint: item.meaning,
                    choices: shuffle([
                        item.reading,
                        ...distractors(items, item, (other)=>other.reading)
                    ]),
                    correctChoice: item.reading,
                    answerLabel: item.reading,
                    answerReading: item.reading
                };
            }
        case "type-reading":
            {
                return {
                    itemId: item.id,
                    kind,
                    prompt: item.term,
                    hint: item.meaning,
                    accepts: [
                        item.reading
                    ],
                    answerLabel: item.reading,
                    answerReading: item.reading
                };
            }
        case "type-en":
            {
                return {
                    itemId: item.id,
                    kind,
                    prompt: item.term,
                    hint: item.partOfSpeech,
                    answerLabel: item.meaning
                };
            }
        case "type-jp":
            {
                // Either script is fine here — the point is recalling the word, and not
                // everyone studies with an IME switched on.
                return {
                    itemId: item.id,
                    kind,
                    prompt: item.meaning,
                    hint: item.partOfSpeech,
                    accepts: [
                        item.term,
                        item.reading
                    ],
                    answerLabel: item.term === item.reading ? item.term : `${item.term} (${item.reading})`,
                    answerReading: item.reading
                };
            }
    }
}
function gradeAnswer(question, item, given) {
    if (question.choices) {
        return given === question.correctChoice ? "correct" : "incorrect";
    }
    if (question.kind === "type-en") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gradeEnglish"])(given, item.meaning);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gradeJapanese"])(given, question.accepts ?? []);
}
/**
 * How far ahead to reschedule an item after a correct answer. Later rungs wait
 * longer, so early words keep cycling while mastered ones drift to the back.
 */ function spacing(level) {
    return 4 + level * 5 + Math.floor(Math.random() * 4);
}
function applyGrade(state, item, grade, clock) {
    const ladderLength = ladderFor(item).length;
    const next = {
        ...state,
        seen: state.seen + 1,
        lastAnsweredAt: Date.now()
    };
    if (grade === "correct") {
        next.correct = state.correct + 1;
        next.streak = state.streak + 1;
        next.level = Math.min(state.level + 1, ladderLength);
        next.dueAt = clock + spacing(next.level);
    } else if (grade === "almost") {
        // A typo shouldn't cost a rung, but the word comes back soon.
        next.streak = 0;
        next.dueAt = clock + 3;
    } else {
        next.incorrect = state.incorrect + 1;
        next.streak = 0;
        next.level = Math.max(0, state.level - 1);
        next.dueAt = clock + 2;
    }
    return next;
}
function nextQuestion(items, progress, lastItemId) {
    if (!items.length) return null;
    const byId = new Map(items.map((item)=>[
            item.id,
            item
        ]));
    const candidates = items.map((item)=>progress.states[item.id]).filter((state)=>Boolean(state));
    if (!candidates.length) return null;
    const unmastered = candidates.filter((state)=>{
        const item = byId.get(state.itemId);
        return item ? !isMastered(item, state) : false;
    });
    const review = unmastered.length === 0;
    const pool = review ? candidates : unmastered;
    // Prefer not to repeat the previous item, but do if it's the only one left.
    const withoutLast = pool.filter((state)=>state.itemId !== lastItemId);
    const usable = withoutLast.length ? withoutLast : pool;
    const chosen = usable.reduce((best, state)=>state.dueAt < best.dueAt ? state : best);
    const item = byId.get(chosen.itemId);
    if (!item) return null;
    const ladder = ladderFor(item);
    const kind = review ? REVIEW_KINDS.filter((k)=>ladder.includes(k))[Math.floor(Math.random() * REVIEW_KINDS.filter((k)=>ladder.includes(k)).length)] ?? ladder[ladder.length - 1] : ladder[Math.min(chosen.level, ladder.length - 1)];
    return {
        question: buildQuestion(item, kind, items),
        item: chosen,
        review
    };
}
function masterySummary(items, progress) {
    if (!items.length) return {
        mastered: 0,
        total: 0,
        percent: 0
    };
    let rungs = 0;
    let climbed = 0;
    let mastered = 0;
    for (const item of items){
        const state = progress.states[item.id];
        const ladderLength = ladderFor(item).length;
        rungs += ladderLength;
        if (!state) continue;
        climbed += Math.min(state.level, ladderLength);
        if (isMastered(item, state)) mastered += 1;
    }
    return {
        mastered,
        total: items.length,
        percent: rungs === 0 ? 0 : climbed / rungs
    };
}
}),
"[project]/src/lib/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSet",
    ()=>createSet,
    "deleteSet",
    ()=>deleteSet,
    "getProgress",
    ()=>getProgress,
    "getSet",
    ()=>getSet,
    "listSets",
    ()=>listSets,
    "newId",
    ()=>newId,
    "resetProgress",
    ()=>resetProgress,
    "saveProgress",
    ()=>saveProgress,
    "saveSet",
    ()=>saveSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/learn/engine.ts [app-ssr] (ecmascript)");
"use client";
;
const SETS_KEY = "kanjiloop:sets";
const PROGRESS_PREFIX = "kanjiloop:progress:";
/** Everything here runs in the browser; guard so pages can still render on the server. */ function available() {
    return ("TURBOPACK compile-time value", "undefined") !== "undefined" && !!window.localStorage;
}
function read(key, fallback) {
    if (!available()) return fallback;
    //TURBOPACK unreachable
    ;
}
function write(key, value) {
    if (!available()) return;
    //TURBOPACK unreachable
    ;
}
function newId() {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
        return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function listSets() {
    return read(SETS_KEY, []).sort((a, b)=>b.updatedAt - a.updatedAt);
}
function getSet(id) {
    return listSets().find((set)=>set.id === id) ?? null;
}
function saveSet(set) {
    const sets = read(SETS_KEY, []);
    const index = sets.findIndex((existing)=>existing.id === set.id);
    const updated = {
        ...set,
        updatedAt: Date.now()
    };
    if (index >= 0) {
        sets[index] = updated;
    } else {
        sets.push(updated);
    }
    write(SETS_KEY, sets);
}
function createSet(name, items) {
    const set = {
        id: newId(),
        name: name.trim() || "Untitled set",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        items
    };
    saveSet(set);
    return set;
}
function deleteSet(id) {
    write(SETS_KEY, read(SETS_KEY, []).filter((set)=>set.id !== id));
    if (available()) //TURBOPACK unreachable
    ;
}
function getProgress(set) {
    const stored = read(PROGRESS_PREFIX + set.id, null);
    if (!stored) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialProgress"])(set.id, set.items);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syncProgress"])(stored, set.items);
}
function saveProgress(progress) {
    write(PROGRESS_PREFIX + progress.setId, {
        ...progress,
        updatedAt: Date.now()
    });
}
function resetProgress(set) {
    const fresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialProgress"])(set.id, set.items);
    saveProgress(fresh);
    return fresh;
}
}),
];

//# sourceMappingURL=src_0-ql3y6._.js.map