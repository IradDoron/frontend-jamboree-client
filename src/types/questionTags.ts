type CssTags =
	| 'CSS'
	| 'CSS Box Model'
	| 'CSS Flexbox'
	| 'CSS Grid'
	| 'CSS Positioning'
	| 'CSS Selectors'
	| 'CSS Padding'
	| 'CSS Margin'
	| 'CSS Border'
	| 'CSS Background'
	| 'CSS Font'
	| 'CSS Text'
	| 'CSS List'
	| 'CSS Table'
	| 'CSS Display'
	| 'CSS Position'
	| 'CSS Overflow'
	| 'CSS Float'
	| 'CSS Media Queries'
	| 'CSS Properties'
	| 'CSS Transition';

type FrontEndTags = 'Responsive Design';

type JavaScriptBuiltInMethods =
	| 'requestAnimationFrame'
	| 'cancelAnimationFrame';

type JavaScriptTags =
	| JavaScriptBuiltInMethods
	| 'JavaScript'
	| 'AJAX'
	| 'DOM'
	| 'Functions'
    | 'Arrow Functions'
    | 'Closures'
    | 'Async Functions'
    | 'Generators'
	| 'Objects'
	| 'Arrays'
	| 'Loops'
	| 'Variables'
	| 'Strings'
	| 'Sets'
    | 'Maps'
    | 'WeakMaps'
    | 'WeakSets'
	| 'Classes'
	| 'Promises'
	| 'JSON'
	| 'JavaScript Events'
	| 'Regular Expressions'
	| 'Async/Await';

type HtmlTags = 'HTML';

export type QuestionTag =
	| CssTags
	| FrontEndTags
	| JavaScriptTags
	| HtmlTags
	| 'React'
	| 'Redux'
	| 'TypeScript'
	| 'jQuery';
