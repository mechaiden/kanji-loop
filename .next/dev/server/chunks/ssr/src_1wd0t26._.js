module.exports = [
"[project]/src/app/sets/[id]/sentences/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SentencesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/japanese.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
/** Fetch more once the queue drops this low, so there's no wait between questions. */ const REFILL_AT = 2;
const BATCH_SIZE = 6;
function SentencesPage() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const [set, setSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [queue, setQueue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [given, setGiven] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [grade, setGrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [answered, setAnswered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Guards against two refills racing when a fetch is slower than the learner.
    const fetching = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const found = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSet"])(id);
        setSet(found);
        setLoaded(true);
    }, [
        id
    ]);
    const refill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (target)=>{
        if (fetching.current) return;
        fetching.current = true;
        setError(null);
        try {
            const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProgress"])(target);
            // Weight the batch toward words the learner is shakiest on.
            const ranked = [
                ...target.items
            ].sort((a, b)=>(progress.states[a.id]?.level ?? 0) - (progress.states[b.id]?.level ?? 0));
            const focus = ranked.slice(0, 12);
            const response = await fetch("/api/practice", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    items: focus.map(({ term, reading, meaning })=>({
                            term,
                            reading,
                            meaning
                        })),
                    count: BATCH_SIZE,
                    known: target.items.map((item)=>item.term)
                })
            });
            const payload = await response.json();
            if (!response.ok) throw new Error(payload.error ?? "Couldn't generate sentences.");
            const batch = payload.questions.map((question)=>{
                const term = focus[question.term_index];
                if (!term) return null;
                return {
                    term,
                    sentenceWithBlank: question.sentence_with_blank,
                    answer: question.answer,
                    answerReading: question.answer_reading,
                    fullSentence: question.full_sentence,
                    english: question.english
                };
            }).filter(Boolean);
            setQueue((current)=>[
                    ...current,
                    ...batch
                ]);
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : "Couldn't generate sentences.");
        } finally{
            fetching.current = false;
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (set && queue.length <= REFILL_AT) void refill(set);
    }, [
        set,
        queue.length,
        refill
    ]);
    if (!loaded) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-60 animate-pulse rounded-xl bg-surface"
    }, void 0, false, {
        fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
        lineNumber: 109,
        columnNumber: 23
    }, this);
    if (!set) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-20 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted",
                    children: "That set no longer exists."
                }, void 0, false, {
                    fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "focus-ring mt-4 inline-block rounded text-accent",
                    children: "Back to your sets"
                }, void 0, false, {
                    fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this);
    }
    const current = queue[0];
    function check() {
        if (!current || grade) return;
        setGrade((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gradeJapanese"])(given, [
            current.answer,
            current.answerReading
        ]));
    }
    function next() {
        setQueue((rest)=>rest.slice(1));
        setGiven("");
        setGrade(null);
        setAnswered((count)=>count + 1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/sets/${set.id}`,
                        className: "focus-ring rounded text-sm text-muted hover:text-foreground",
                        children: [
                            "← ",
                            set.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted tabular-nums",
                        children: [
                            answered,
                            " answered"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            !current ? error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-wrong",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>void refill(set),
                        className: "focus-ring mt-4 rounded-xl border border-border px-5 py-2.5 text-sm",
                        children: "Try again"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                        lineNumber: 154,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                lineNumber: 152,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jp animate-pulse text-3xl text-accent",
                        children: "作文中"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-sm text-muted",
                        children: "Writing fresh sentences with your words…"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                lineNumber: 163,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-rise",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted",
                        children: "Fill in the blank"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jp mt-4 text-3xl leading-relaxed",
                        children: current.sentenceWithBlank
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-sm text-muted",
                        children: current.english
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "mt-8",
                        onSubmit: (event)=>{
                            event.preventDefault();
                            if (grade) next();
                            else check();
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                autoFocus: true,
                                value: given,
                                onChange: (event)=>setGiven(event.target.value),
                                readOnly: Boolean(grade),
                                placeholder: "kana or romaji",
                                autoComplete: "off",
                                spellCheck: false,
                                className: `jp focus-ring w-full rounded-xl border bg-surface px-4 py-3.5 text-xl ${grade === "correct" ? "border-correct" : grade === "almost" ? "animate-shake border-almost" : grade === "incorrect" ? "animate-shake border-wrong" : "border-border"}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: !grade && !given.trim(),
                                className: "focus-ring mt-3 w-full rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-35",
                                children: grade ? "Next sentence" : "Check"
                            }, void 0, false, {
                                fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    grade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 animate-rise rounded-xl border border-border bg-surface px-4 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted",
                                children: grade === "correct" ? "Correct" : grade === "almost" ? "Almost — watch the spelling" : "The answer was"
                            }, void 0, false, {
                                fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                                lineNumber: 215,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jp mt-1 text-2xl",
                                children: current.answer
                            }, void 0, false, {
                                fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["romajiOf"])(current.answerReading)
                            }, void 0, false, {
                                fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                                lineNumber: 223,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jp mt-4 text-lg",
                                children: current.fullSentence
                            }, void 0, false, {
                                fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-muted",
                                children: current.english
                            }, void 0, false, {
                                fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-xs text-muted opacity-70",
                                children: [
                                    "from ",
                                    current.term.term,
                                    " · ",
                                    current.term.meaning
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                        lineNumber: 214,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/sets/[id]/sentences/page.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
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

//# sourceMappingURL=src_1wd0t26._.js.map