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

type HtmlElements =
	| '<img>'
	| '<a>'
	| '<div>'
	| '<span>'
	| '<p>'
	| '<h1> - <h6>'
	| '<ul>'
	| '<ol>'
	| '<li>'
	| '<table>'
	| '<tr>'
	| '<td>'
	| '<th>'
	| '<form>'
	| '<input>'
	| '<button>'
	| '<select>'
	| '<option>'
	| '<textarea>'
	| '<label>'
	| '<video>'
	| '<audio>'
	| '<iframe>'
	| '<canvas>'
	| '<svg>'
	| '<path>'
	| '<circle>'
	| '<rect>'
	| '<line>'
	| '<polygon>'
	| '<polyline>'
	| '<g>'
	| '<defs>'
	| '<clipPath>'
	| '<use>'
	| '<symbol>'
	| '<title>'
	| '<desc>'
	| '<style>'
	| '<script>'
	| '<meta>'
	| '<link>'
	| '<head>'
	| '<body>'
	| '<html>'
	| '<!DOCTYPE html>';

export type QuestionTag =
	| CssTags
	| FrontEndTags
	| JavaScriptTags
	| HtmlTags
	| HtmlElements
	| 'React'
	| 'Redux'
	| 'TypeScript'
	| 'jQuery';
