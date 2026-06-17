import type { LegalBlock, LegalDocument, LegalSection } from '../../i18n/legal/types';
import { InlineText } from '../../i18n/legal/inline';
import { useLanguage } from '../../i18n/LanguageContext';
import { legalUi } from '../../i18n/legal/ui';

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case 'p':
      return <p className="text-gray-700"><InlineText text={block.text} /></p>;
    case 'h3':
      return <h3 className="font-semibold text-gray-800 mt-4 mb-2"><InlineText text={block.text} /></h3>;
    case 'ul':
      return (
        <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
          {block.items.map((item, i) => (
            <li key={i}><InlineText text={item} /></li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="list-decimal list-inside space-y-1 mt-2 text-gray-700">
          {block.items.map((item, i) => (
            <li key={i}><InlineText text={item} /></li>
          ))}
        </ol>
      );
    case 'callout':
      return (
        <div className={`rounded-lg border p-4 ${
          block.variant === 'warning'
            ? 'border-amber-200 bg-amber-50 text-amber-900'
            : 'border-blue-200 bg-blue-50 text-blue-900'
        }`}>
          <p><InlineText text={block.text} /></p>
        </div>
      );
    case 'table':
      return (
        <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-semibold text-gray-700">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-4 py-3 ${ci > 0 ? 'text-gray-600' : 'font-medium'}`}>
                      {cell.includes('[') ? <InlineText text={cell} /> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'card':
      return (
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="font-semibold text-gray-800 mb-2">{block.title}</p>
          <p className="text-gray-600 whitespace-pre-line"><InlineText text={block.text} /></p>
        </div>
      );
    case 'cards':
      return (
        <div className="mt-4 space-y-4">
          {block.items.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-800 mb-2">{item.title}</p>
              <p className="text-gray-600 whitespace-pre-line"><InlineText text={item.text} /></p>
            </div>
          ))}
        </div>
      );
    case 'keyValue':
      return (
        <div className="bg-gray-50 rounded-xl p-5 space-y-2 text-gray-700">
          {block.items.map((item, i) => (
            <p key={i}><strong>{item.label}</strong> {item.value.includes('[') ? <InlineText text={item.value} /> : item.value}</p>
          ))}
        </div>
      );
    case 'hr':
      return <hr className="my-16 border-gray-200" />;
    default:
      return null;
  }
}

function Section({ section }: { section: LegalSection }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
      <div className="space-y-3">
        {section.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </section>
  );
}

export function LegalDocumentView({ document }: { document: LegalDocument }) {
  const { lang } = useLanguage();
  const ui = legalUi[lang];
  const { meta, toc, sections } = document;
  const showVersion = Boolean(meta.version);

  return (
    <>
      {meta.eyebrow && (
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{meta.eyebrow}</p>
      )}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">{meta.title}</h1>
      {meta.subtitle && <p className="text-sm text-gray-500 mb-1">{meta.subtitle}</p>}
      {showVersion && (
        <p className="text-sm text-gray-400 mb-2">
          Version {meta.version}
          {meta.effectiveDate && (
            <>
              {' · '}
              {ui.versionApplicable}
              {' '}
              {meta.effectiveDate}
            </>
          )}
        </p>
      )}
      {meta.intro && (
        <p className="text-sm text-gray-500 mb-10 leading-relaxed">
          <InlineText text={meta.intro} />
        </p>
      )}
      {!meta.intro && <div className="mb-10" />}

      {toc && (
        <nav className="bg-gray-50 rounded-xl p-5 mb-10 text-sm">
          <p className="font-semibold text-gray-700 mb-3">{toc.label}</p>
          <ol className="list-decimal list-inside space-y-1 text-gray-600 columns-2 gap-x-6">
            {toc.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </nav>
      )}

      <div className="space-y-10 text-sm sm:text-base leading-relaxed">
        {sections.map((section, i) => (
          <Section key={i} section={section} />
        ))}
      </div>

      {meta.footerLine && (
        <p className="text-xs text-gray-400 mt-10 text-center">{meta.footerLine}</p>
      )}
    </>
  );
}
