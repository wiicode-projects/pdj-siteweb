import React from 'react';
import { Link } from 'react-router-dom';

const LINK_RE = /\[link:([^|]+)\|([^\]]+)\]/g;
const MAILTO_RE = /\[mailto:([^|]+)\|([^\]]+)\]/g;
const ROUTE_RE = /\[route:([^|]+)\|([^\]]+)\]/g;
const STRONG_RE = /\[strong:([^\]]+)\]/g;
const TEL_RE = /\[tel:([^|]+)\|([^\]]+)\]/g;

function splitAndRender(text: string, keyPrefix: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let index = 0;

  const pushPlain = (plain: string) => {
    if (plain) parts.push(plain);
  };

  while (remaining.length > 0) {
    const matchers = [
      { re: LINK_RE, render: (m: RegExpExecArray) => (
        <a key={`${keyPrefix}-${index++}`} href={m[1]} className="text-primary underline" target="_blank" rel="noopener noreferrer">{m[2]}</a>
      )},
      { re: MAILTO_RE, render: (m: RegExpExecArray) => (
        <a key={`${keyPrefix}-${index++}`} href={`mailto:${m[1]}`} className="text-primary underline">{m[2]}</a>
      )},
      { re: ROUTE_RE, render: (m: RegExpExecArray) => (
        <Link key={`${keyPrefix}-${index++}`} to={m[1]} className="text-primary underline">{m[2]}</Link>
      )},
      { re: TEL_RE, render: (m: RegExpExecArray) => (
        <a key={`${keyPrefix}-${index++}`} href={`tel:${m[1]}`} className="text-primary underline">{m[2]}</a>
      )},
      { re: STRONG_RE, render: (m: RegExpExecArray) => (
        <strong key={`${keyPrefix}-${index++}`}>{m[1]}</strong>
      )},
    ];

    let earliest: { start: number; end: number; node: React.ReactNode } | null = null;

    for (const { re, render } of matchers) {
      re.lastIndex = 0;
      const match = re.exec(remaining);
      if (match && (earliest === null || match.index < earliest.start)) {
        earliest = { start: match.index, end: match.index + match[0].length, node: render(match) };
      }
    }

    if (!earliest) {
      pushPlain(remaining);
      break;
    }

    pushPlain(remaining.slice(0, earliest.start));
    parts.push(earliest.node);
    remaining = remaining.slice(earliest.end);
  }

  return parts;
}

export function InlineText({ text }: { text: string }) {
  return <>{splitAndRender(text, 'inline')}</>;
}
