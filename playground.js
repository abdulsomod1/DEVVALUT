// Playground.js - DEV-VAULT Playground Interactivity

// Data Storage
const playgroundData = {
    challenges: [
        // HTML Challenges
        { id: 1, title: 'Build a Semantic HTML Form', difficulty: 'beginner', language: 'html', description: 'Create a form with proper semantic HTML5 elements', points: 50 },
        { id: 2, title: 'Create a Responsive Navigation', difficulty: 'beginner', language: 'html', description: 'Build a semantic navigation structure', points: 50 },
        { id: 3, title: 'HTML5 Accessibility Challenge', difficulty: 'intermediate', language: 'html', description: 'Implement ARIA labels and semantic markup', points: 100 },
        { id: 4, title: 'Build a Complex Form Layout', difficulty: 'intermediate', language: 'html', description: 'Create nested fieldsets and form groups', points: 100 },
        { id: 5, title: 'Metadata & SEO Optimization', difficulty: 'advanced', language: 'html', description: 'Optimize HTML head with meta tags and schema markup', points: 150 },
        { id: 6, title: 'Microdata Implementation', difficulty: 'advanced', language: 'html', description: 'Add structured data and JSON-LD', points: 150 },

        // CSS Challenges
        { id: 7, title: 'Flexbox Layout Challenge', difficulty: 'beginner', language: 'css', description: 'Create responsive layouts using flexbox', points: 50 },
        { id: 8, title: 'CSS Grid Masterclass', difficulty: 'beginner', language: 'css', description: 'Build grid-based page layouts', points: 50 },
        { id: 9, title: 'Advanced Animations', difficulty: 'intermediate', language: 'css', description: 'Create smooth CSS animations and transitions', points: 100 },
        { id: 10, title: 'Glassmorphism UI', difficulty: 'intermediate', language: 'css', description: 'Build modern glassmorphic design components', points: 100 },
        { id: 11, title: 'CSS Custom Properties', difficulty: 'advanced', language: 'css', description: 'Master CSS variables and theming systems', points: 150 },
        { id: 12, title: 'Responsive Typography', difficulty: 'advanced', language: 'css', description: 'Implement fluid typography systems', points: 150 },

        // JavaScript Challenges
        { id: 13, title: 'DOM Manipulation Basics', difficulty: 'beginner', language: 'javascript', description: 'Select and modify DOM elements', points: 50 },
        { id: 14, title: 'Event Handling Fundamentals', difficulty: 'beginner', language: 'javascript', description: 'Handle user interactions with events', points: 50 },
        { id: 15, title: 'Asynchronous Programming', difficulty: 'intermediate', language: 'javascript', description: 'Master Promises and async/await', points: 100 },
        { id: 16, title: 'API Integration', difficulty: 'intermediate', language: 'javascript', description: 'Fetch data from external APIs', points: 100 },
        { id: 17, title: 'Advanced Array Methods', difficulty: 'advanced', language: 'javascript', description: 'Master map, filter, reduce, and more', points: 150 },
        { id: 18, title: 'Closure & Scope Mastery', difficulty: 'advanced', language: 'javascript', description: 'Understand closure patterns and scope', points: 150 },

        // React Challenges
        { id: 19, title: 'React Component Basics', difficulty: 'beginner', language: 'react', description: 'Create functional React components', points: 50 },
        { id: 20, title: 'React Hooks Fundamentals', difficulty: 'beginner', language: 'react', description: 'Learn useState and useEffect hooks', points: 50 },
        { id: 21, title: 'State Management', difficulty: 'intermediate', language: 'react', description: 'Manage complex state with useReducer', points: 100 },
        { id: 22, title: 'Context API Challenge', difficulty: 'intermediate', language: 'react', description: 'Build context-based state management', points: 100 },
        { id: 23, title: 'Custom Hooks Development', difficulty: 'advanced', language: 'react', description: 'Create reusable custom hooks', points: 150 },
        { id: 24, title: 'Performance Optimization', difficulty: 'advanced', language: 'react', description: 'Optimize React app performance', points: 150 },

        // Python Challenges
        { id: 25, title: 'Python Basics', difficulty: 'beginner', language: 'python', description: 'Variables, loops, and conditionals', points: 50 },
        { id: 26, title: 'List Comprehensions', difficulty: 'beginner', language: 'python', description: 'Master Python list comprehensions', points: 50 },
        { id: 27, title: 'OOP in Python', difficulty: 'intermediate', language: 'python', description: 'Learn classes and inheritance', points: 100 },
        { id: 28, title: 'Decorators & Generators', difficulty: 'intermediate', language: 'python', description: 'Master advanced Python features', points: 100 },
        { id: 29, title: 'Async Python', difficulty: 'advanced', language: 'python', description: 'Learn asyncio and async/await', points: 150 },
        { id: 30, title: 'Design Patterns', difficulty: 'advanced', language: 'python', description: 'Implement common design patterns', points: 150 },

        // Rust Challenges
        { id: 31, title: 'Rust Ownership', difficulty: 'beginner', language: 'rust', description: 'Understand Rust ownership system', points: 50 },
        { id: 32, title: 'Pattern Matching', difficulty: 'beginner', language: 'rust', description: 'Master Rust pattern matching', points: 50 },
        { id: 33, title: 'Trait System', difficulty: 'intermediate', language: 'rust', description: 'Learn traits and generics', points: 100 },
        { id: 34, title: 'Error Handling', difficulty: 'intermediate', language: 'rust', description: 'Master Result and Option types', points: 100 },
        { id: 35, title: 'Concurrency in Rust', difficulty: 'advanced', language: 'rust', description: 'Learn threads and async runtime', points: 150 },
        { id: 36, title: 'Unsafe Rust', difficulty: 'advanced', language: 'rust', description: 'Master unsafe code patterns', points: 150 },
    ],

    templates: [
        // Frontend Templates
        { id: 1, name: 'Personal Portfolio', difficulty: 'beginner', category: 'frontend', description: 'Showcase your projects with a modern portfolio site', icon: '🎨' },
        { id: 2, name: 'Blog Platform', difficulty: 'intermediate', category: 'frontend', description: 'Create a blogging interface with markdown support', icon: '📝' },
        { id: 3, name: 'E-commerce Store', difficulty: 'intermediate', category: 'frontend', description: 'Build a product showcase with shopping cart', icon: '🛍️' },
        { id: 4, name: 'Social Media Feed', difficulty: 'intermediate', category: 'frontend', description: 'Create a Twitter-like feed interface', icon: '📱' },
        { id: 5, name: 'Weather Dashboard', difficulty: 'beginner', category: 'frontend', description: 'Display real-time weather data', icon: '🌤️' },
        { id: 6, name: 'Todo App', difficulty: 'beginner', category: 'frontend', description: 'Build a task management application', icon: '✅' },
        { id: 7, name: 'Music Player', difficulty: 'intermediate', category: 'frontend', description: 'Create an interactive music player', icon: '🎵' },
        { id: 8, name: 'Photo Gallery', difficulty: 'beginner', category: 'frontend', description: 'Build an image gallery with filtering', icon: '🖼️' },
        { id: 9, name: 'Chat Interface', difficulty: 'intermediate', category: 'frontend', description: 'Design a messaging UI', icon: '💬' },
        { id: 10, name: 'Calculator', difficulty: 'beginner', category: 'frontend', description: 'Build a functional calculator', icon: '🧮' },

        // Full Stack Templates
        { id: 11, name: 'User Authentication', difficulty: 'intermediate', category: 'fullstack', description: 'Implement login and registration system', icon: '🔐' },
        { id: 12, name: 'Real-time Chat App', difficulty: 'professional', category: 'fullstack', description: 'Build WebSocket-based chat application', icon: '💻' },
        { id: 13, name: 'Project Management Tool', difficulty: 'professional', category: 'fullstack', description: 'Create a Trello-like project manager', icon: '📊' },
        { id: 14, name: 'Social Network', difficulty: 'professional', category: 'fullstack', description: 'Build a social platform with real-time updates', icon: '👥' },
        { id: 15, name: 'Video Streaming Platform', difficulty: 'professional', category: 'fullstack', description: 'Create a video hosting and streaming service', icon: '🎬' },
        { id: 16, name: 'E-learning Platform', difficulty: 'professional', category: 'fullstack', description: 'Build an online course management system', icon: '🎓' },
        { id: 17, name: 'Marketplace', difficulty: 'professional', category: 'fullstack', description: 'Create a multi-vendor marketplace', icon: '🏪' },
        { id: 18, name: 'API Gateway', difficulty: 'professional', category: 'fullstack', description: 'Build microservices API orchestration', icon: '🌉' },
        { id: 19, name: 'Analytics Dashboard', difficulty: 'professional', category: 'fullstack', description: 'Create data visualization dashboards', icon: '📈' },
        { id: 20, name: 'CMS System', difficulty: 'professional', category: 'fullstack', description: 'Build a content management system', icon: '📄' },

        // Backend Templates
        { id: 21, name: 'REST API', difficulty: 'beginner', category: 'backend', description: 'Build a RESTful API from scratch', icon: '🔌' },
        { id: 22, name: 'GraphQL Server', difficulty: 'intermediate', category: 'backend', description: 'Create a GraphQL API', icon: '📡' },
        { id: 23, name: 'Microservices', difficulty: 'professional', category: 'backend', description: 'Design microservices architecture', icon: '🏗️' },
        { id: 24, name: 'Message Queue System', difficulty: 'professional', category: 'backend', description: 'Implement event-driven architecture', icon: '📮' },
        { id: 25, name: 'Authentication Service', difficulty: 'intermediate', category: 'backend', description: 'Build JWT-based auth service', icon: '🔑' },
        { id: 26, name: 'File Upload Service', difficulty: 'intermediate', category: 'backend', description: 'Handle file uploads with S3/Cloud Storage', icon: '📤' },
        { id: 27, name: 'Search Engine', difficulty: 'professional', category: 'backend', description: 'Implement full-text search', icon: '🔍' },
        { id: 28, name: 'Recommendation Engine', difficulty: 'professional', category: 'backend', description: 'Build ML-powered recommendations', icon: '🤖' },
        { id: 29, name: 'Payment Gateway', difficulty: 'professional', category: 'backend', description: 'Integrate payment processing', icon: '💳' },
        { id: 30, name: 'Webhook System', difficulty: 'intermediate', category: 'backend', description: 'Build webhook event system', icon: '🪝' },

        // Game Development Templates
        { id: 31, name: 'Snake Game', difficulty: 'beginner', category: 'game', description: 'Classic snake game using Canvas', icon: '🐍' },
        { id: 32, name: 'Flappy Bird Clone', difficulty: 'beginner', category: 'game', description: 'Build Flappy Bird game', icon: '🐦' },
        { id: 33, name: '2D Platformer', difficulty: 'intermediate', category: 'game', description: 'Create a side-scrolling platformer', icon: '🎮' },
        { id: 34, name: 'Puzzle Game', difficulty: 'intermediate', category: 'game', description: 'Build a match-3 puzzle game', icon: '🧩' },
        { id: 35, name: '3D Game', difficulty: 'professional', category: 'game', description: 'Create 3D game with Babylon.js', icon: '🎯' },
        { id: 36, name: 'Multiplayer Game', difficulty: 'professional', category: 'game', description: 'Build networked multiplayer game', icon: '👾' },
        { id: 37, name: 'Tower Defense', difficulty: 'intermediate', category: 'game', description: 'Create tower defense game', icon: '🏰' },
        { id: 38, name: 'Card Game', difficulty: 'intermediate', category: 'game', description: 'Build a card game engine', icon: '🃏' },
        { id: 39, name: 'Roguelike Game', difficulty: 'professional', category: 'game', description: 'Create a procedurally generated dungeon', icon: '⚔️' },
        { id: 40, name: 'Racing Game', difficulty: 'professional', category: 'game', description: 'Build a racing game with physics', icon: '🏎️' },

        // Mobile Templates
        { id: 41, name: 'Mobile Navigation', difficulty: 'beginner', category: 'mobile', description: 'Responsive mobile-first navigation', icon: '📲' },
        { id: 42, name: 'Progressive Web App', difficulty: 'intermediate', category: 'mobile', description: 'Build a PWA with offline support', icon: '🔄' },
        { id: 43, name: 'React Native App', difficulty: 'professional', category: 'mobile', description: 'Create cross-platform mobile app', icon: '☎️' },
        { id: 44, name: 'Flutter App', difficulty: 'professional', category: 'mobile', description: 'Build beautiful Flutter applications', icon: '🦋' },
        { id: 45, name: 'Mobile E-commerce', difficulty: 'intermediate', category: 'mobile', description: 'Optimize shopping experience for mobile', icon: '🛒' },
        { id: 46, name: 'Mobile Banking', difficulty: 'professional', category: 'mobile', description: 'Create secure mobile banking interface', icon: '🏦' },
        { id: 47, name: 'Fitness Tracker', difficulty: 'intermediate', category: 'mobile', description: 'Build health and fitness app', icon: '💪' },
        { id: 48, name: 'Travel App', difficulty: 'intermediate', category: 'mobile', description: 'Create a travel booking platform', icon: '✈️' },
        { id: 49, name: 'Recipe App', difficulty: 'beginner', category: 'mobile', description: 'Build a recipe discovery app', icon: '👨‍🍳' },
        { id: 50, name: 'Meditation App', difficulty: 'intermediate', category: 'mobile', description: 'Create mindfulness and meditation app', icon: '🧘' },

        // Additional Templates
        { id: 51, name: 'Data Visualization', difficulty: 'intermediate', category: 'frontend', description: 'Build interactive charts and graphs', icon: '📊' },
        { id: 52, name: 'Real-time Notifications', difficulty: 'intermediate', category: 'fullstack', description: 'Implement push notifications', icon: '🔔' },
        { id: 53, name: 'File Management', difficulty: 'intermediate', category: 'fullstack', description: 'Build cloud file storage system', icon: '📁' },
        { id: 54, name: 'Video Conferencing', difficulty: 'professional', category: 'fullstack', description: 'Create video call application', icon: '📞' },
        { id: 55, name: 'Document Editor', difficulty: 'professional', category: 'fullstack', description: 'Build collaborative document editor', icon: '✏️' },
        { id: 56, name: 'Inventory Management', difficulty: 'intermediate', category: 'fullstack', description: 'Create inventory tracking system', icon: '📦' },
        { id: 57, name: 'HR Management', difficulty: 'professional', category: 'fullstack', description: 'Build HR and employee management', icon: '👔' },
        { id: 58, name: 'Hotel Booking', difficulty: 'professional', category: 'fullstack', description: 'Create hotel reservation system', icon: '🏨' },
        { id: 59, name: 'Ride-sharing App', difficulty: 'professional', category: 'fullstack', description: 'Build Uber-like ride sharing app', icon: '🚗' },
        { id: 60, name: 'Email Client', difficulty: 'professional', category: 'fullstack', description: 'Create a web-based email client', icon: '📧' },
    ],

    vaults: {
        html: [
            { concept: 'Web Components', description: 'Build encapsulated, reusable custom HTML elements using Shadow DOM and Custom Elements API.', example: '<template id="my-element">\n  <p>Hello!</p>\n</template>' },
            { concept: 'HTML5 Canvas API', description: 'Master drawing and animation with the Canvas API for graphics and real-time rendering.', example: 'const ctx = canvas.getContext("2d");\nctx.fillStyle = "red";\nctx.fillRect(0, 0, 100, 100);' },
            { concept: 'WebGL', description: 'Create 3D graphics in the browser using WebGL shaders and GPU acceleration.', example: 'const context = canvas.getContext("webgl");\n// Initialize WebGL context' },
            { concept: 'MathML & SVG', description: 'Embed mathematical formulas and scalable vector graphics directly in HTML.', example: '<svg><circle cx="50" cy="50" r="40"/></svg>' },
            { concept: 'Embedded Media', description: 'Advanced audio/video embedding with HLS streaming and adaptive bitrate.', example: '<video controls>\n  <source src="video.mp4" type="video/mp4">\n</video>' },
            { concept: 'Service Workers & Manifest', description: '🔐 SECRET: Register service workers for offline support and PWA manifest configuration.', example: 'navigator.serviceWorker.register("sw.js").then(reg => console.log("Registered"));' },
            { concept: 'IndexedDB Integration', description: '🔐 RARE: Store large client-side data with full-text search in IndexedDB.', example: 'const req = indexedDB.open("myDB", 1);\nreq.onsuccess = (e) => db = e.target.result;' },
            { concept: 'Performance Observer API', description: '🔐 RARE: Measure and observe performance metrics, CLS, FCP, LCP, TTFB.', example: 'const observer = new PerformanceObserver(list => console.log(list));\nobserver.observe({entryTypes: ["largest-contentful-paint"]});' },
            { concept: 'Intersection Observer API', description: 'Detect when elements enter/exit viewport for lazy loading and analytics.', example: 'const observer = new IntersectionObserver(callback);\nobserver.observe(element);' },
            { concept: 'MutationObserver API', description: '🔐 RARE: Watch for DOM changes like attribute modifications or child additions.', example: 'const observer = new MutationObserver(mutations => {});\nobserver.observe(target, {attributes: true, childList: true});' },
            { concept: 'ResizeObserver API', description: '🔐 RARE: Monitor element size changes without resize events.', example: 'const observer = new ResizeObserver(entries => {});\nobserver.observe(element);' },
            { concept: 'Fullscreen API', description: 'Enter fullscreen mode for videos, games, and immersive experiences.', example: 'element.requestFullscreen().catch(err => console.log(err));' },
            { concept: 'Vibration API', description: '🔐 RARE: Trigger device vibrations for haptic feedback on mobile.', example: 'navigator.vibrate([100, 50, 100]); // Vibrate pattern' },
            { concept: 'Geolocation API', description: 'Get user location with high accuracy for location-based services.', example: 'navigator.geolocation.getCurrentPosition(position => console.log(position.coords));' },
            { concept: 'History API State Management', description: '🔐 RARE: Manage browser history with state objects without page reload.', example: 'history.pushState({data: "value"}, "", "/new-url");\nwindow.onpopstate = e => console.log(e.state);' },
        ],
        css: [
            { concept: 'Subgrid', description: 'Create nested grids that inherit parent grid track sizing for complex layouts.', example: 'grid-template-columns: subgrid;\ngrid-template-rows: subgrid;' },
            { concept: 'Container Queries', description: 'Style elements based on their container size, not viewport, for true component-based design.', example: '@container (min-width: 400px) {\n  h2 { font-size: 2em; }\n}' },
            { concept: 'CSS Masks', description: 'Create complex shapes and transparency effects with CSS masks.', example: 'mask-image: url(#my-mask);\nmask-size: cover;' },
            { concept: 'Backdrop Filters', description: 'Apply blur and color effects to elements behind an element (glassmorphism).', example: 'backdrop-filter: blur(10px);\nbackdrop-filter: brightness(0.5);' },
            { concept: 'CSS Scroll Snap', description: 'Create carousel and scroll behavior with native CSS scroll snap points.', example: 'scroll-snap-type: x mandatory;\nscroll-snap-align: center;' },
            { concept: 'CSS Nesting', description: '🔐 NEW: Native CSS nesting without SASS/SCSS for cleaner stylesheets.', example: '.card {\n  background: white;\n  &:hover { box-shadow: 0 10px 20px; }\n}' },
            { concept: 'CSS Anchor Positioning', description: '🔐 RARE: Position elements relative to any DOM element anchor points.', example: 'anchor-name: --my-anchor;\nposition-anchor: --my-anchor;\ninset-area: top span-left;' },
            { concept: 'CSS :has() Selector', description: '🔐 RARE: Select parent elements based on children content - "parent selector".', example: '.card:has(> .premium-badge) { border: 2px gold solid; }' },
            { concept: 'CSS @layer & Cascade Layers', description: '🔐 RARE: Control cascade priority with explicit layer definitions.', example: '@layer base, theme, utilities;\n@layer base { body { margin: 0; } }' },
            { concept: 'CSS Houdini Paint API', description: '🔐 RARE: Create custom CSS paint functions with JavaScript.', example: 'CSS.paintWorklet.addModule("paint.js");\nbackground: paint(myPaint);' },
            { concept: 'CSS Comparison Functions', description: '🔐 RARE: Use min(), max(), clamp() for responsive sizing.', example: 'width: clamp(200px, 100%, 1000px);\npadding: max(1rem, 5vw);' },
            { concept: 'CSS Containment', description: '🔐 RARE: Optimize rendering performance with CSS containment.', example: 'contain: layout style paint;\ncontain: size layout;' },
            { concept: 'CSS @supports & Feature Queries', description: 'Detect CSS feature support before using them.', example: '@supports (display: grid) {\n  .layout { display: grid; }\n}' },
            { concept: 'CSS Writing Modes & Logical Properties', description: '🔐 RARE: Use logical properties for multi-directional text layouts.', example: 'margin-block: 1rem; padding-inline: 2rem; inset-block-start: 0;' },
            { concept: 'CSS View Transitions API', description: '🔐 RARE: Animate between different page views seamlessly.', example: 'document.startViewTransition(() => updateDOM());\n::view-transition-new(root) { animation: slide-in; }' },
        ],
        javascript: [
            { concept: 'WeakMap & WeakSet', description: 'Use garbage-collectable collections for memory-efficient data structures.', example: 'const wm = new WeakMap();\nwm.set(obj, value);' },
            { concept: 'Proxy & Reflect', description: 'Intercept and customize object operations for reactive data and metaprogramming.', example: 'new Proxy(target, {\n  get(obj, prop) { return obj[prop]; }\n});' },
            { concept: 'Symbol', description: 'Create unique identifiers for object properties and well-known protocols.', example: 'const id = Symbol("unique");\nobj[id] = "hidden value";' },
            { concept: 'Temporal API', description: 'Work with dates and times using the modern Temporal API (upcoming standard).', example: 'const d = Temporal.PlainDate.from("2024-01-15");' },
            { concept: 'Worker Threads', description: 'Execute JavaScript in background threads without blocking the main thread.', example: 'const worker = new Worker("worker.js");\nworker.postMessage(data);' },
            { concept: 'BigInt Arithmetic', description: '🔐 RARE: Handle arbitrarily large integers beyond Number.MAX_SAFE_INTEGER.', example: 'const big = 123456789012345678901234567890n;\nconst result = big * 2n;' },
            { concept: 'ArrayBuffer & TypedArrays', description: '🔐 RARE: Work with binary data using typed arrays for performance.', example: 'const buffer = new ArrayBuffer(16);\nconst view = new Int32Array(buffer);' },
            { concept: 'SharedArrayBuffer & Atomics', description: '🔐 RARE: Share memory between workers with atomic operations.', example: 'const shared = new SharedArrayBuffer(1024);\nAtomics.store(arr, 0, 42);' },
            { concept: 'FinalizationRegistry & WeakRef', description: '🔐 RARE: Track object garbage collection and cleanup callbacks.', example: 'const registry = new FinalizationRegistry(heldValue => cleanup(heldValue));\nregistry.register(obj, "metadata");' },
            { concept: 'Intl API - Internationalization', description: '🔐 RARE: Format dates, numbers, strings for different locales.', example: 'new Intl.DateTimeFormat("de-DE").format(new Date());\nnew Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(1234.56);' },
            { concept: 'StructuredClone Algorithm', description: '🔐 RARE: Deep clone objects with circular references and special types.', example: 'const deepCopy = structuredClone({nested: {data: arr}});\n// Handles Maps, Sets, Dates' },
            { concept: 'Regex Advanced Features', description: 'Named capture groups, lookbehind, lookahead, Unicode properties.', example: 'const re = /(?<year>\\d{4})-(?<month>\\d{2})/;\nconst {year, month} = "2024-06".match(re).groups;' },
            { concept: 'Promise.allSettled & Race', description: '🔐 RARE: Handle multiple promises with different settlement strategies.', example: 'Promise.allSettled([p1, p2, p3]).then(results => results.filter(r => r.status === "fulfilled"));' },
            { concept: 'AsyncIterables & for-await-of', description: '🔐 RARE: Iterate async data sources naturally with async generators.', example: 'for await (const item of asyncIterable) { console.log(item); }' },
            { concept: 'Error Stack Traces & StackTraceLimit', description: '🔐 RARE: Customize error stack traces for debugging and logging.', example: 'Error.stackTraceLimit = 50;\nconsole.log(new Error().stack);' },
        ],
        react: [
            { concept: 'Suspense & Code Splitting', description: 'Lazy load components and handle async data fetching elegantly.', example: 'const AsyncComponent = React.lazy(() => import("./Component"));\n<Suspense fallback={<Spinner />}>' },
            { concept: 'Concurrent Features', description: 'Use Concurrent React for non-blocking updates and better user experience.', example: 'startTransition(() => {\n  setFilteredResults(filtered);\n});' },
            { concept: 'Error Boundaries', description: 'Catch React errors and display fallback UI gracefully.', example: 'class ErrorBoundary extends React.Component {\n  componentDidCatch(error, info) {}\n}' },
            { concept: 'React Query Optimization', description: 'Master server state management with React Query for efficient data fetching.', example: 'const { data, isLoading } = useQuery(["users"], fetchUsers);' },
            { concept: 'Portals & Hydration', description: 'Render components outside the DOM tree and handle server-side rendering.', example: 'ReactDOM.createPortal(component, document.body);' },
            { concept: 'useTransition Hook', description: '🔐 RARE: Mark state updates as non-urgent for better UX.', example: 'const [isPending, startTransition] = useTransition();\nstartTransition(() => setInput(value));' },
            { concept: 'useDeferredValue Hook', description: '🔐 RARE: Defer updating UI value to improve performance.', example: 'const deferredSearchTerm = useDeferredValue(searchTerm);\n// deferredSearchTerm lags behind actual searchTerm' },
            { concept: 'useId Hook', description: '🔐 RARE: Generate unique IDs for form elements and accessibility.', example: 'const id = useId();\nreturn <label htmlFor={id}>Name:</label>;' },
            { concept: 'React.memo vs useMemo', description: '🔐 RARE: Understand memoization strategies for performance optimization.', example: 'const MemoComponent = React.memo(Component, (prev, next) => prev.id === next.id);' },
            { concept: 'Automatic Batching', description: '🔐 RARE: React 18 automatically batches state updates.', example: 'setState1(); setState2(); // Both in one render cycle' },
            { concept: 'Compound Components Pattern', description: '🔐 RARE: Create flexible component APIs using composition.', example: '<Select><Option value="a">A</Option><Option value="b">B</Option></Select>' },
            { concept: 'Server Components (RSC)', description: '🔐 RARE: Render components on server without sending JS to client.', example: 'async function ServerComponent() { return <div>{await fetchData()}</div>; }' },
            { concept: 'Streaming SSR', description: '🔐 RARE: Stream HTML to client before all data is ready.', example: 'renderToNodeStream(<App />, res).pipe(res);' },
            { concept: 'useReducer with Immer', description: '🔐 RARE: Simplify complex state management with Immer integration.', example: 'const [state, dispatch] = useReducer(immer(reducer), initialState);' },
            { concept: 'Custom Hook Patterns & Rules', description: '🔐 RARE: Advanced patterns for reusable logic extraction.', example: 'function useAsync(asyncFn, immediate = true) {\n  const [status, setStatus] = useState("idle");\n  // Complex hook logic\n}' },
        ],
        python: [
            { concept: 'Metaclasses', description: 'Create classes that control class creation and modify class behavior dynamically.', example: 'class Meta(type):\n    def __new__(mcs, name, bases, dct): ...' },
            { concept: 'Context Managers', description: 'Manage resources efficiently with context managers and the with statement.', example: 'with open("file.txt") as f:\n    data = f.read()' },
            { concept: 'Descriptors', description: 'Implement custom attribute access with descriptors for computed properties.', example: 'class Descriptor:\n    def __get__(self, obj, type=None): ...' },
            { concept: 'Python GIL & Threading', description: 'Understand the Global Interpreter Lock and optimize multi-threaded code.', example: 'from threading import Thread\nt = Thread(target=function)' },
            { concept: 'Type Hints & Protocols', description: 'Use advanced type hints and protocols for static type checking in Python.', example: 'def func(x: list[int]) -> dict[str, int]: ...' },
            { concept: '__slots__ Memory Optimization', description: '🔐 RARE: Reduce memory usage by limiting instance attributes.', example: 'class Point:\n    __slots__ = ("x", "y")\n    # Memory efficient!' },
            { concept: '__getattr__ vs __getattribute__', description: '🔐 RARE: Intercept attribute access at different levels.', example: 'def __getattribute__(self, name): return super().__getattribute__(name)' },
            { concept: 'Data Classes & Field Factories', description: '🔐 RARE: Use dataclass field() for complex default values.', example: 'from dataclasses import dataclass, field\n@dataclass\nclass Config:\n    items: list = field(default_factory=list)' },
            { concept: 'NamedTuple vs TypedDict', description: '🔐 RARE: Choose between immutable tuples and typed dictionaries.', example: 'class Point(NamedTuple):\n    x: int\n    y: int' },
            { concept: 'Functools & Partial Application', description: '🔐 RARE: Create specialized functions with fixed arguments.', example: 'from functools import partial\nadd_five = partial(lambda a, b: a + b, 5)\nresult = add_five(3)  # 8' },
            { concept: 'Itertools Advanced Recipes', description: '🔐 RARE: Master advanced iteration patterns and recipes.', example: 'from itertools import islice, combinations\nfor combo in combinations(range(5), 2): ...' },
            { concept: 'Collections Advanced', description: '🔐 RARE: Use Counter, deque, defaultdict for specialized needs.', example: 'from collections import Counter\nfreq = Counter("mississippi")\nfreq.most_common(3)' },
            { concept: 'Performance with cProfile & timeit', description: '🔐 RARE: Profile and benchmark Python code systematically.', example: 'import cProfile\ncProfile.run("function()")\nimport timeit\ntimeit.timeit(lambda: func(), number=1000)' },
            { concept: 'Memory Profiling & Memory_profiler', description: '🔐 RARE: Track memory usage line-by-line in functions.', example: '@profile\ndef function():\n    x = [i for i in range(1000000)]  # Memory usage shown' },
            { concept: 'AST Module - Abstract Syntax Trees', description: '🔐 RARE: Parse and manipulate Python code as trees.', example: 'import ast\ntree = ast.parse("x = 1 + 2")\nast.dump(tree)  # Inspect structure' },
        ],
        rust: [
            { concept: 'Lifetime Annotations', description: 'Master Rust lifetimes for memory safety without garbage collection.', example: 'fn borrow<\'a>(x: &\'a i32) -> &\'a i32 { x }' },
            { concept: 'Advanced Pattern Matching', description: 'Use destructuring and guards for powerful pattern matching.', example: 'match (x, y) {\n    (0, 0) => "origin",\n    (x, 0) if x > 0 => "positive x"\n}' },
            { concept: 'Procedural Macros', description: 'Create compile-time code generation with procedural macros.', example: '#[derive(Debug)]\nstruct MyStruct { field: i32 }' },
            { concept: 'Async/Await & Tokio', description: 'Build high-performance async applications with Tokio runtime.', example: 'async fn fetch() {\n    let resp = reqwest::get(url).await;\n}' },
            { concept: 'FFI & Unsafe', description: 'Call C libraries and write unsafe code when necessary in Rust.', example: 'extern "C" { fn c_function(); }' },
            { concept: 'Builder Pattern in Rust', description: '🔐 RARE: Create flexible object construction with builders.', example: 'struct ConfigBuilder {\n    name: Option<String>,\n    timeout: Option<u64>,\n}\nimpl ConfigBuilder { fn build(self) -> Config { ... } }' },
            { concept: 'Associated Types & GATs', description: '🔐 RARE: Use generic associated types for advanced trait design.', example: 'trait MyTrait<\'a> {\n    type Associated: \'a;\n}' },
            { concept: 'Newtype Pattern', description: '🔐 RARE: Create semantic types with compile-time safety.', example: 'struct UserId(u64);\nstruct ProductId(u64);\n// Cannot mix them!' },
            { concept: 'PhantomData & Variance', description: '🔐 RARE: Control phantom type variance for correctness.', example: 'struct Marker<T> { data: PhantomData<T> }' },
            { concept: 'Drop Traits & Custom Cleanup', description: '🔐 RARE: Implement custom cleanup with Drop trait.', example: 'impl Drop for MyType {\n    fn drop(&mut self) { /* cleanup */ }\n}' },
            { concept: 'Closure Traits Fn/FnMut/FnOnce', description: '🔐 RARE: Understand three closure trait types and their differences.', example: 'fn call_fn<F: Fn()>(f: F) { f(); }\nfn call_fn_mut<F: FnMut()>(mut f: F) { f(); }' },
            { concept: 'Pin & Unpin for Self-Referential Structs', description: '🔐 RARE: Create safe self-referential data structures.', example: 'struct SelfRef { data: String, ptr: *const String }\nlet pinned = Box::pin(SelfRef::new());' },
            { concept: 'Cow (Copy-on-Write)', description: '🔐 RARE: Efficiently handle owned or borrowed data.', example: 'fn process(data: Cow<[i32]>) -> Cow<[i32]> { data }' },
            { concept: 'Interior Mutability Patterns', description: '🔐 RARE: Achieve mutability without &mut using Cell/RefCell.', example: 'struct Counter { count: RefCell<i32> }\nlet c = Counter { count: RefCell::new(0) };\n*c.count.borrow_mut() += 1;' },
            { concept: 'Custom Derives & Macros', description: '🔐 RARE: Write custom derive macros for code generation.', example: '#[proc_macro_derive(MyDerive)]\npub fn derive_my(input: TokenStream) -> TokenStream { ... }' },
        ],
        django: [
            { concept: 'Django ORM Advanced', description: 'Master QuerySet optimization, select_related, and prefetch_related.', example: 'User.objects.select_related("profile").all()' },
            { concept: 'Django Signals', description: 'Use signals for decoupled application logic and event handling.', example: 'from django.db.models.signals import post_save\nfrom django.dispatch import receiver' },
            { concept: 'Django Middleware', description: 'Create custom middleware for request/response processing.', example: 'class CustomMiddleware:\n    def __call__(self, request): ...' },
            { concept: 'Django REST Framework', description: 'Build powerful REST APIs with serialization and permissions.', example: 'class UserViewSet(viewsets.ModelViewSet):\n    queryset = User.objects.all()' },
            { concept: 'Celery & Task Queue', description: 'Implement async task processing with Celery and Redis.', example: '@app.task\ndef async_task(param):\n    return result' },
            { concept: 'Custom Model Managers & QuerySets', description: '🔐 RARE: Create custom managers for domain-specific queries.', example: 'class PublishedManager(models.Manager):\n    def get_queryset(self):\n        return super().get_queryset().filter(published=True)' },
            { concept: 'Q Objects & Complex Queries', description: '🔐 RARE: Build complex OR/AND queries dynamically.', example: 'from django.db.models import Q\nUser.objects.filter(Q(first_name="John") | Q(last_name="Doe"))' },
            { concept: 'Aggregation & Annotation', description: '🔐 RARE: Compute aggregates like Count, Sum, Avg at DB level.', example: 'from django.db.models import Count, Avg\nProduct.objects.annotate(sale_count=Count("orders"), avg_price=Avg("price"))' },
            { concept: 'F Objects & Database Expressions', description: '🔐 RARE: Perform calculations directly in database queries.', example: 'from django.db.models import F\nProduct.objects.update(price=F("price") * 1.1)  # 10% increase' },
            { concept: 'Transactions & Atomicity', description: '🔐 RARE: Ensure data consistency with transactions.', example: 'from django.db import transaction\nwith transaction.atomic():\n    obj.delete()\n    related.save()' },
            { concept: 'Database Connection Pooling', description: '🔐 RARE: Configure connection pools for better performance.', example: 'DATABASES = {\n    "default": {\n        "CONN_MAX_AGE": 600,\n        "CONN_HEALTH_CHECKS": True,\n    }\n}' },
            { concept: 'Django Cache Framework', description: '🔐 RARE: Cache models, queries, and views efficiently.', example: 'from django.views.decorators.cache import cache_page\n@cache_page(60 * 5)\ndef cached_view(request): ...' },
            { concept: 'Custom Authentication Backends', description: '🔐 RARE: Implement custom authentication strategies.', example: 'class EmailBackend(ModelBackend):\n    def authenticate(self, request, username=None, password=None): ...' },
            { concept: 'Permission & Group System', description: '🔐 RARE: Fine-grained permission control and group management.', example: 'user.groups.add(group)\nif user.has_perm("app.delete_model"): ...' },
            { concept: 'Django Admin Customization', description: '🔐 RARE: Extend admin interface with custom actions and filters.', example: '@admin.register(Model)\nclass ModelAdmin(admin.ModelAdmin):\n    actions = ["custom_action"]\n    readonly_fields = ["created_at"]' },
        ],
    }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DEV-VAULT Playground Initializing ===');
    console.log('Challenges data:', playgroundData.challenges.length);
    console.log('Templates data:', playgroundData.templates.length);
    console.log('Vaults data:', Object.keys(playgroundData.vaults));
    
    // Verify containers exist
    const containers = {
        challengesGrid: document.getElementById('challengesGrid'),
        templatesGrid: document.getElementById('templatesGrid'),
        vaultsContainer: document.getElementById('vaultsContainer')
    };
    
    console.log('Containers found:', {
        challengesGrid: !!containers.challengesGrid,
        templatesGrid: !!containers.templatesGrid,
        vaultsContainer: !!containers.vaultsContainer
    });
    
    // Initialize in correct order
    initializeMenuToggle();
    initializeTabSwitching();
    initializeSearch();
    
    // Wait a tick to ensure DOM is ready
    setTimeout(() => {
        initializeChallenges();
        initializeTemplates();
        initializeLearningVaults();
        initializeFilters();
        setupSmoothScrolling();
        verifyInitialization();
    }, 100);
});

// Verification function
function verifyInitialization() {
    const challengeCards = document.querySelectorAll('.challenge-card');
    const templateCards = document.querySelectorAll('.template-card');
    const vaultCards = document.querySelectorAll('.vault-card');
    
    console.log('=== Initialization Verification ===');
    console.log('Challenge cards rendered:', challengeCards.length);
    console.log('Template cards rendered:', templateCards.length);
    console.log('Vault cards rendered:', vaultCards.length);
    console.log('=== All systems operational ===');
}

// Menu Toggle
function initializeMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (!menuToggle || !navLinks) {
        console.warn('Menu toggle elements not found');
        return;
    }

    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    console.log('Menu toggle initialized');
}

// Tab Switching
function initializeTabSwitching() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    console.log('Found', tabBtns.length, 'tab buttons and', tabContents.length, 'tab contents');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            console.log('Switching to tab:', tabName);
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const tabElement = document.getElementById(tabName);
            if (tabElement) {
                tabElement.classList.add('active');
                console.log('Activated tab:', tabName);
            } else {
                console.error('Tab element not found:', tabName);
            }
        });
    });
}

// Initialize Challenges
function initializeChallenges() {
    renderChallenges(playgroundData.challenges);
}

function renderChallenges(challenges) {
    const container = document.getElementById('challengesGrid');
    if (!container) {
        console.error('challengesGrid container not found');
        return;
    }

    console.log('Rendering', challenges.length, 'challenges');
    
    container.innerHTML = challenges.map(challenge => `
        <div class="challenge-card" data-difficulty="${challenge.difficulty}" data-language="${challenge.language}">
            <div class="challenge-header">
                <h3 class="challenge-title">${challenge.title}</h3>
                <span class="challenge-difficulty ${challenge.difficulty}">${challenge.difficulty}</span>
            </div>
            <span class="challenge-language">${challenge.language.toUpperCase()}</span>
            <p class="challenge-description">${challenge.description}</p>
            <div class="challenge-footer">
                <span>+${challenge.points} points</span>
                <a href="#" class="challenge-link" onclick="event.preventDefault();">
                    Start Challenge <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// Initialize Templates
function initializeTemplates() {
    renderTemplates(playgroundData.templates);
}

function renderTemplates(templates) {
    const container = document.getElementById('templatesGrid');
    if (!container) {
        console.error('templatesGrid container not found');
        return;
    }

    console.log('Rendering', templates.length, 'templates');
    
    container.innerHTML = templates.map(template => `
        <div class="template-card" data-difficulty="${template.difficulty}" data-category="${template.category}">
            <div class="template-preview">${template.icon}</div>
            <div class="template-info">
                <h3 class="template-name">${template.name}</h3>
                <div class="template-meta">
                    <span class="template-badge difficulty">${template.difficulty}</span>
                    <span class="template-badge category">${template.category}</span>
                </div>
                <p class="template-description">${template.description}</p>
                <a href="#" class="template-btn" onclick="event.preventDefault();">Use Template →</a>
            </div>
        </div>
    `).join('');
}

// Initialize Learning Vaults
function initializeLearningVaults() {
    const vaultTabBtns = document.querySelectorAll('.vault-tab-btn');
    
    // Set first button as active
    if (vaultTabBtns.length > 0) {
        vaultTabBtns[0].classList.add('active');
    }
    
    vaultTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const vaultType = this.getAttribute('data-vault');
            
            // Remove active class from all buttons
            vaultTabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            renderVault(vaultType);
        });
    });

    // Render initial vault
    renderVault('html');
}

function renderVault(vaultType) {
    const container = document.getElementById('vaultsContainer');
    if (!container) return;

    const vault = playgroundData.vaults[vaultType];
    if (!vault) {
        console.error('Vault not found for type:', vaultType);
        return;
    }
    
    container.innerHTML = vault.map((item, index) => `
        <div class="vault-card" style="animation-delay: ${index * 0.05}s">
            <h3 class="vault-title">
                <i class="fas fa-lock-open"></i> ${item.concept}
            </h3>
            <p class="vault-content">${item.description}</p>
            <pre class="vault-code"><code>${escapeHtml(item.example)}</code></pre>
        </div>
    `).join('');
}

// Helper function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Initialize Filters
function initializeFilters() {
    console.log('Setting up filter buttons...');
    
    // Set initial active states for "all" buttons
    document.querySelectorAll('.filter-btn[data-level="all"]').forEach(btn => btn.classList.add('active'));
    document.querySelectorAll('.filter-btn[data-language="all"]').forEach(btn => btn.classList.add('active'));
    document.querySelectorAll('.filter-btn[data-difficulty="all"]').forEach(btn => btn.classList.add('active'));
    document.querySelectorAll('.filter-btn[data-category="all"]').forEach(btn => btn.classList.add('active'));

    // Challenge level filters
    const levelFilters = document.querySelectorAll('#challenges .filter-btn[data-level]');
    console.log('Challenge level filters found:', levelFilters.length);
    levelFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active from all level buttons
            document.querySelectorAll('#challenges .filter-btn[data-level]').forEach(b => b.classList.remove('active'));
            // Add active to clicked button
            this.classList.add('active');
            filterChallenges();
        });
    });

    // Challenge language filters
    const languageFilters = document.querySelectorAll('#challenges .filter-btn[data-language]');
    console.log('Challenge language filters found:', languageFilters.length);
    languageFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active from all language buttons
            document.querySelectorAll('#challenges .filter-btn[data-language]').forEach(b => b.classList.remove('active'));
            // Add active to clicked button
            this.classList.add('active');
            filterChallenges();
        });
    });

    // Template difficulty filters
    const difficultyFilters = document.querySelectorAll('#templates .filter-btn[data-difficulty]');
    console.log('Template difficulty filters found:', difficultyFilters.length);
    difficultyFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active from all difficulty buttons
            document.querySelectorAll('#templates .filter-btn[data-difficulty]').forEach(b => b.classList.remove('active'));
            // Add active to clicked button
            this.classList.add('active');
            filterTemplates();
        });
    });

    // Template category filters
    const categoryFilters = document.querySelectorAll('#templates .filter-btn[data-category]');
    console.log('Template category filters found:', categoryFilters.length);
    categoryFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active from all category buttons
            document.querySelectorAll('#templates .filter-btn[data-category]').forEach(b => b.classList.remove('active'));
            // Add active to clicked button
            this.classList.add('active');
            filterTemplates();
        });
    });
    
    console.log('Filter buttons initialized');
}

// Filter Challenges
function filterChallenges() {
    const levelBtns = document.querySelectorAll('#challenges .filter-btn[data-level]');
    const languageBtns = document.querySelectorAll('#challenges .filter-btn[data-language]');

    let selectedLevel = 'all';
    let selectedLanguage = 'all';

    levelBtns.forEach(btn => {
        if (btn.classList.contains('active')) {
            selectedLevel = btn.getAttribute('data-level');
        }
    });

    languageBtns.forEach(btn => {
        if (btn.classList.contains('active')) {
            selectedLanguage = btn.getAttribute('data-language');
        }
    });

    const filtered = playgroundData.challenges.filter(challenge => {
        const levelMatch = selectedLevel === 'all' || challenge.difficulty === selectedLevel;
        const languageMatch = selectedLanguage === 'all' || challenge.language === selectedLanguage;
        return levelMatch && languageMatch;
    });

    renderChallenges(filtered);
}

// Filter Templates
function filterTemplates() {
    const difficultyBtns = document.querySelectorAll('#templates .filter-btn[data-difficulty]');
    const categoryBtns = document.querySelectorAll('#templates .filter-btn[data-category]');

    let selectedDifficulty = 'all';
    let selectedCategory = 'all';

    difficultyBtns.forEach(btn => {
        if (btn.classList.contains('active')) {
            selectedDifficulty = btn.getAttribute('data-difficulty');
        }
    });

    categoryBtns.forEach(btn => {
        if (btn.classList.contains('active')) {
            selectedCategory = btn.getAttribute('data-category');
        }
    });

    const filtered = playgroundData.templates.filter(template => {
        const difficultyMatch = selectedDifficulty === 'all' || template.difficulty === selectedDifficulty;
        const categoryMatch = selectedCategory === 'all' || template.category === selectedCategory;
        return difficultyMatch && categoryMatch;
    });

    renderTemplates(filtered);
}

// Initialize Search
function initializeSearch() {
    const searchInput = document.getElementById('globalSearch');

    if (!searchInput) {
        console.warn('Search input not found');
        return;
    }

    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        
        if (query.length === 0) {
            renderChallenges(playgroundData.challenges);
            renderTemplates(playgroundData.templates);
            return;
        }

        const filteredChallenges = playgroundData.challenges.filter(c =>
            c.title.toLowerCase().includes(query) ||
            c.description.toLowerCase().includes(query) ||
            c.language.toLowerCase().includes(query)
        );

        const filteredTemplates = playgroundData.templates.filter(t =>
            t.name.toLowerCase().includes(query) ||
            t.description.toLowerCase().includes(query)
        );

        console.log('Search results:', filteredChallenges.length, 'challenges,', filteredTemplates.length, 'templates');

        // Update display only if we're in the right tab
        const activeChallengesTab = document.getElementById('challenges')?.classList.contains('active');
        const activeTemplatesTab = document.getElementById('templates')?.classList.contains('active');

        if (activeChallengesTab) {
            renderChallenges(filteredChallenges);
        } else if (activeTemplatesTab) {
            renderTemplates(filteredTemplates);
        }
    });
    
    console.log('Search initialized');
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const element = document.querySelector(href);
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
