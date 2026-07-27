import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const papersDirectory = path.join(root, 'content', 'papers');

function addOnce(text, addition) {
  return text.includes(addition) ? text : `${text.replace(/\s+$/, '')} ${addition}`;
}

function formalizeScope(text) {
  return text
    .replace(/^How /, 'Examines how ')
    .replace(/^Whether /, 'Evaluates whether ')
    .replace(/^Why /, 'Analyzes why ')
    .replace(/^The main channels through which /, 'Decomposes the transmission channels through which ')
    .replace(/^A focused assessment of /, 'Assesses ')
    .replace(/^A focused commentary on /, 'Reviews ')
    .replace(/^A prototype for /, 'Presents a prototype for ')
    .replace(/^The growing role of /, 'Examines the growing role of ');
}

function technicalize(paper) {
  if (!paper.summary) return false;

  const summary = paper.summary;
  const context = `${paper.title} ${summary.about} ${summary.method} ${summary.insights}`.toLowerCase();
  summary.about = formalizeScope(summary.about);

  if (/cge|gtap|general[- ]equilibrium/.test(context)) {
    summary.method = summary.method
      .replace(/\bCGE model\b/g, 'multi-sector computable general equilibrium (CGE) model')
      .replace(/\bGTAP CGE model\b/g, 'GTAP-based multi-regional CGE model');
    summary.method = addOnce(summary.method, 'Counterfactual outcomes are evaluated against a calibrated baseline through sectoral output, trade, factor-income, and welfare channels.');
    summary.insights = addOnce(summary.insights, 'These are scenario-conditioned comparative responses rather than unconditional forecasts.');
  } else if (/time[- ]series|cointegration|granger|arima|variance decomposition|stationary|shock-response/.test(context)) {
    summary.method = addOnce(summary.method, 'The empirical design separates long-run equilibrium relationships from short-run adjustment and dynamic response.');
    summary.insights = addOnce(summary.insights, 'The estimated relationships should be interpreted as model-based associations unless a stronger identification strategy is specified.');
  } else if (/survey|interview|case study|household|qualitative|commentary|review|synthes/.test(context)) {
    summary.method = addOnce(summary.method, 'The evidence is interpreted within the study’s stated sample, source base, and implementation context rather than as a universal causal estimate.');
    summary.insights = addOnce(summary.insights, 'The policy implication is therefore context-dependent and should be tested against local implementation conditions.');
  } else if (/model|framework|algorithm|dataset|data-mining/.test(context)) {
    summary.method = addOnce(summary.method, 'The contribution is methodological: it specifies an analytical mechanism and evaluates it against the stated data or scenarios.');
    summary.insights = addOnce(summary.insights, 'The result is conditional on the model specification, data-generating process, and validation assumptions.');
  } else {
    summary.method = addOnce(summary.method, 'The analysis is interpreted through the relevant sectoral transmission mechanisms and implementation constraints.');
    summary.insights = addOnce(summary.insights, 'The conclusion is conditional on the evidence base and assumptions described in the study.');
  }

  return true;
}

let changed = 0;
for (const filename of fs.readdirSync(papersDirectory).filter((name) => name.endsWith('.json'))) {
  const filePath = path.join(papersDirectory, filename);
  const paper = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (technicalize(paper)) {
    fs.writeFileSync(filePath, `${JSON.stringify(paper, null, 2)}\n`, 'utf8');
    changed += 1;
  }
}

console.log(`Upgraded technical language in ${changed} paper summaries.`);
