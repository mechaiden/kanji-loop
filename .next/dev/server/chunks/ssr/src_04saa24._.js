module.exports = [
"[project]/src/app/sets/[id]/learn/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LearnPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProgressBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/japanese.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/learn/engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const INSTRUCTION = {
    "mc-jp-en": "What does this mean?",
    "mc-en-jp": "Which word is this?",
    "mc-reading": "How is this read?",
    "type-reading": "Type the reading",
    "type-en": "Type the meaning",
    "type-jp": "Write this in Japanese"
};
/** Kinds whose prompt is Japanese, and so needs the CJK font and a bigger size. */ const JAPANESE_PROMPT = {
    "mc-jp-en": true,
    "mc-en-jp": false,
    "mc-reading": true,
    "type-reading": true,
    "type-en": true,
    "type-jp": false
};
const JAPANESE_CHOICES = {
    "mc-jp-en": false,
    "mc-en-jp": true,
    "mc-reading": true,
    "type-reading": false,
    "type-en": false,
    "type-jp": false
};
function LearnPage() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const [set, setSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [given, setGiven] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /** A near-miss is forgiven once per question; a second one counts as wrong. */ const [almostUsed, setAlmostUsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [round, setRound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recap, setRecap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const advanceTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const found = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSet"])(id);
        setSet(found);
        if (found) {
            const loadedProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProgress"])(found);
            setProgress(loadedProgress);
            setCurrent((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nextQuestion"])(found.items, loadedProgress));
        }
        setLoaded(true);
    }, [
        id
    ]);
    // Don't let a queued auto-advance fire after the user navigates away.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            if (advanceTimer.current) clearTimeout(advanceTimer.current);
        }, []);
    const goToNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((fromProgress, lastItemId)=>{
        if (!set) return;
        setFeedback(null);
        setGiven("");
        setAlmostUsed(false);
        setCurrent((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nextQuestion"])(set.items, fromProgress, lastItemId));
        inputRef.current?.focus();
    }, [
        set
    ]);
    const submit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((answer)=>{
        if (!set || !progress || !current || feedback?.grade === "correct") return;
        const item = set.items.find((candidate)=>candidate.id === current.question.itemId);
        if (!item) return;
        const raw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gradeAnswer"])(current.question, item, answer);
        // "Almost" is a spelling slip, not a knowledge gap: let them retype once
        // without touching their level or burning a question slot.
        if (raw === "almost" && !almostUsed) {
            setAlmostUsed(true);
            setFeedback({
                grade: "almost",
                answer: current.question.answerLabel
            });
            return;
        }
        const grade = raw === "almost" ? "incorrect" : raw;
        const clock = progress.clock + 1;
        const updated = {
            ...progress,
            clock,
            questionsAnswered: progress.questionsAnswered + 1,
            states: {
                ...progress.states,
                [item.id]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyGrade"])(progress.states[item.id], item, grade, clock)
            },
            updatedAt: Date.now()
        };
        setProgress(updated);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveProgress"])(updated);
        setFeedback({
            grade,
            answer: current.question.answerLabel
        });
        const entry = {
            question: current.question,
            given: answer,
            grade
        };
        const nextRound = [
            ...round,
            entry
        ];
        setRound(nextRound);
        // Right answers flow straight on; wrong ones wait for the learner to read
        // the correction and press continue.
        if (grade === "correct") {
            advanceTimer.current = setTimeout(()=>{
                if (nextRound.length >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUND_SIZE"]) {
                    setRecap(nextRound);
                } else {
                    goToNext(updated, item.id);
                }
            }, 650);
        }
    }, [
        set,
        progress,
        current,
        feedback,
        almostUsed,
        round,
        goToNext
    ]);
    const handleContinue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!progress || !current) return;
        if (round.length >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUND_SIZE"]) {
            setRecap(round);
            return;
        }
        goToNext(progress, current.question.itemId);
    }, [
        progress,
        current,
        round,
        goToNext
    ]);
    // Number keys pick a choice, Enter moves on — the whole session is keyboard-only.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function onKeyDown(event) {
            if (recap) return;
            const choices = current?.question.choices;
            if (feedback && feedback.grade !== "almost") {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    if (feedback.grade !== "correct") handleContinue();
                }
                return;
            }
            if (choices && /^[1-9]$/.test(event.key)) {
                const index = Number(event.key) - 1;
                if (index < choices.length) {
                    event.preventDefault();
                    submit(choices[index]);
                }
            }
        }
        window.addEventListener("keydown", onKeyDown);
        return ()=>window.removeEventListener("keydown", onKeyDown);
    }, [
        current,
        feedback,
        recap,
        submit,
        handleContinue
    ]);
    if (!loaded) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-60 animate-pulse rounded-xl bg-surface"
    }, void 0, false, {
        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
        lineNumber: 185,
        columnNumber: 23
    }, this);
    if (!set || !progress) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-20 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted",
                    children: "That set no longer exists."
                }, void 0, false, {
                    fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "focus-ring mt-4 inline-block rounded text-accent",
                    children: "Back to your sets"
                }, void 0, false, {
                    fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
            lineNumber: 189,
            columnNumber: 7
        }, this);
    }
    const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["masterySummary"])(set.items, progress);
    if (recap) {
        const missed = recap.filter((entry)=>entry.grade !== "correct");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-xl animate-rise py-10 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jp text-4xl",
                    children: missed.length === 0 ? "完璧" : "いいね"
                }, void 0, false, {
                    fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-4 text-2xl font-semibold tracking-tight",
                    children: [
                        recap.length - missed.length,
                        " of ",
                        recap.length,
                        " right"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-muted",
                    children: [
                        summary.mastered,
                        " of ",
                        summary.total,
                        " words mastered"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    value: summary.percent,
                    className: "mt-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                missed.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mt-8 space-y-2 text-left",
                    children: missed.map((entry, index)=>{
                        const item = set.items.find((c)=>c.id === entry.question.itemId);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "rounded-lg border border-border bg-surface px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jp text-lg",
                                    children: item?.term
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-muted",
                                    children: [
                                        item?.reading !== item?.term && `${item?.reading} · `,
                                        item?.meaning
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, `${entry.question.itemId}-${index}`, true, {
                            fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                            lineNumber: 218,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                    lineNumber: 214,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 flex justify-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/sets/${set.id}`,
                            className: "focus-ring rounded-xl border border-border px-5 py-3 text-sm text-muted hover:text-foreground",
                            children: "Take a break"
                        }, void 0, false, {
                            fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            autoFocus: true,
                            onClick: ()=>{
                                setRound([]);
                                setRecap(null);
                                goToNext(progress, current?.question.itemId ?? "");
                            },
                            className: "focus-ring rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90",
                            children: "Keep going"
                        }, void 0, false, {
                            fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
            lineNumber: 203,
            columnNumber: 7
        }, this);
    }
    if (!current) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-20 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted",
                children: "This set has no words yet."
            }, void 0, false, {
                fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
            lineNumber: 259,
            columnNumber: 7
        }, this);
    }
    const { question } = current;
    const japanesePrompt = JAPANESE_PROMPT[question.kind];
    const japaneseChoices = JAPANESE_CHOICES[question.kind];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/sets/${set.id}`,
                        className: "focus-ring rounded text-sm text-muted hover:text-foreground",
                        "aria-label": "Leave the session",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        value: summary.percent,
                        className: "flex-1",
                        label: "Set mastery"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-20 text-right text-xs text-muted tabular-nums",
                        children: [
                            round.length,
                            "/",
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$learn$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUND_SIZE"]
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            current.review && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-5 rounded-lg border border-accent/25 bg-accent/5 px-4 py-2.5 text-center text-sm text-muted",
                children: "Everything’s mastered — this is review, mixing the hardest question types to keep it fresh."
            }, void 0, false, {
                fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                lineNumber: 286,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-rise",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted",
                        children: INSTRUCTION[question.kind]
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-3 font-medium ${japanesePrompt ? "jp text-5xl" : "text-3xl"}`,
                        children: question.prompt
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    question.hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-muted",
                        children: question.hint
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this),
                    question.choices ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-8 grid gap-2.5 sm:grid-cols-2",
                        children: question.choices.map((choice, index)=>{
                            const chosen = feedback && given === choice;
                            const isAnswer = choice === question.correctChoice;
                            const reveal = Boolean(feedback);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: reveal,
                                    onClick: ()=>{
                                        setGiven(choice);
                                        submit(choice);
                                    },
                                    className: `focus-ring flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors ${reveal && isAnswer ? "border-correct bg-correct/10" : reveal && chosen ? "border-wrong bg-wrong/10" : "border-border bg-surface hover:border-accent/50"} ${reveal && !isAnswer && !chosen ? "opacity-40" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "shrink-0 text-xs text-muted tabular-nums",
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: japaneseChoices ? "jp text-xl" : "",
                                            children: choice
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 19
                                }, this)
                            }, choice, false, {
                                fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                                lineNumber: 314,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "mt-8",
                        onSubmit: (event)=>{
                            event.preventDefault();
                            if (feedback && feedback.grade !== "almost") {
                                if (feedback.grade !== "correct") handleContinue();
                                return;
                            }
                            submit(given);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                autoFocus: true,
                                value: given,
                                onChange: (event)=>setGiven(event.target.value),
                                readOnly: Boolean(feedback) && feedback?.grade !== "almost",
                                placeholder: question.kind === "type-en" ? "in English" : "kana or romaji — romaji converts as you go",
                                autoComplete: "off",
                                autoCorrect: "off",
                                spellCheck: false,
                                className: `focus-ring w-full rounded-xl border bg-surface px-4 py-3.5 text-xl ${question.kind === "type-en" ? "" : "jp"} ${feedback?.grade === "correct" ? "border-correct" : feedback?.grade === "incorrect" ? "animate-shake border-wrong" : feedback?.grade === "almost" ? "animate-shake border-almost" : "border-border"}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this),
                            (!feedback || feedback.grade === "almost") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "focus-ring mt-3 w-full rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-35",
                                disabled: !given.trim(),
                                children: "Check"
                            }, void 0, false, {
                                fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                                lineNumber: 382,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                        lineNumber: 342,
                        columnNumber: 11
                    }, this),
                    feedback?.grade === "almost" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-sm text-almost",
                        children: "So close — check your spelling and try once more."
                    }, void 0, false, {
                        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                        lineNumber: 394,
                        columnNumber: 11
                    }, this),
                    feedback && feedback.grade !== "almost" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 animate-rise",
                        children: [
                            feedback.grade === "incorrect" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-border bg-surface px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted",
                                        children: "Correct answer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jp mt-1 text-2xl",
                                        children: feedback.answer
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 17
                                    }, this),
                                    question.answerReading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-muted",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["romajiOf"])(question.answerReading)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                                        lineNumber: 406,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                                lineNumber: 402,
                                columnNumber: 15
                            }, this),
                            feedback.grade === "incorrect" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                autoFocus: true,
                                onClick: handleContinue,
                                className: "focus-ring mt-4 w-full rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90",
                                children: "Continue"
                            }, void 0, false, {
                                fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                                lineNumber: 413,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                        lineNumber: 400,
                        columnNumber: 11
                    }, this)
                ]
            }, `${question.itemId}-${question.kind}`, true, {
                fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/sets/[id]/learn/page.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ProgressBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** A 0–1 mastery bar. Used on set cards and above the learn session. */ __turbopack_context__.s([
    "default",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ProgressBar({ value, className = "", label }) {
    const percent = Math.round(Math.min(Math.max(value, 0), 1) * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-1.5 w-full overflow-hidden rounded-full bg-surface-raised ${className}`,
        role: "progressbar",
        "aria-valuenow": percent,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": label ?? "Mastery",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-full bg-accent transition-[width] duration-500 ease-out",
            style: {
                width: `${percent}%`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ProgressBar.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProgressBar.tsx",
        lineNumber: 14,
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

//# sourceMappingURL=src_04saa24._.js.map