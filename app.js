// Infisum site behavior: nav, hero typer, scroll reveals, industries grid + modal,
// capability tabs, contact form.

/* Verified against the live Infisum article pages and their publication links. */
const PAPER_LINKS = window.INFISUM_CONTENT?.paperLinks || {
  "A Graphics Design Framework to Visualize Multi-dimensional Economic Datasets": {
    "pageUrl": null,
    "paperUrl": "https://www.edgj.org/index.php/EDGJ/article/download/385/278/0"
  },
  "A Method to Analyze the Sectoral Impact of Fiscal Support for COVID-19 Affected Economies: The Case of Oceania": {
    "pageUrl": null,
    "paperUrl": null
  },
  "A Quantitative Assessment of Economic Impact of Trade Wars and the â€˜Make in Indiaâ€™ Program": {
    "pageUrl": null,
    "paperUrl": "https://artnet.unescap.org/publications/working-papers/quantitative-assessment-economic-impact-trade-wars-and-make-india"
  },
  "Agricultural Production, Irrigation, Climate Change, and Water Scarcity in India": {
    "pageUrl": null,
    "paperUrl": "assets/content/papers/AAEA_2015_India_Final.pdf"
  },
  "An Analysis of Long-Run Environmental Impacts and Multi-Criteria-Based Prioritization of the Natural Dyes in the Indian Textile Industry": {
    "pageUrl": null,
    "paperUrl": null
  },
  "An Updated Assessment of the Economic Impact of COVID-19": {
    "pageUrl": null,
    "paperUrl": "https://www.adb.org/sites/default/files/publication/604206/adb-brief-133-updated-economic-impact-covid-19.pdf"
  },
  "Analysing the Effects of the COVID-19 Pandemic on Medical Supply Chains in Commonwealth Countries": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Analysis of Indiaâ€™s Competitive Position in RCEP": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Analysis of the Role of Tariff Concessions in East Asia": {
    "pageUrl": null,
    "paperUrl": "https://econpapers.repec.org/paper/ngidpaper/16-21.htm"
  },
  "Analyzing the Potential Market for MSMEs in India": {
    "pageUrl": null,
    "paperUrl": "https://armgpublishing.com/journals/sec/volume-7-issue-1/article-9/"
  },
  "Assessing the Costs of Tariffs on the US ICT Industry: Modeling US-China Tariffs": {
    "pageUrl": null,
    "paperUrl": "https://rhg.com/research/assessing-the-costs-of-tariffs-on-the-us-ict-industry/"
  },
  "Assessing the Economic Impact of the Trade Agreement Between the EU and Signatory Countries of the Andean Community": {
    "pageUrl": null,
    "paperUrl": null
  },
  "AtmaNirbhar Auto Industry: The China Factor": {
    "pageUrl": null,
    "paperUrl": "https://auto.economictimes.indiatimes.com/news/industry/atmanirbhar-auto-industry-the-china-factor/77862594"
  },
  "Barriers in Implementation of Sanitation Projects: A Case Study of Open Defecation Free (ODF) India": {
    "pageUrl": null,
    "paperUrl": "https://www.cdes.org.in/wp-content/uploads/2020/06/1-Barriers-in-Implementation-of-Sanitation-Projects-A-Case-Study-of-Open-Defecation-Free-ODF-India.pdf"
  },
  "Barriers in Improving Education Quality: A Case Study of Rural India": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Beyond the Supercycle: How Technology Is Reshaping Resources": {
    "pageUrl": null,
    "paperUrl": "https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/Sustainability/Our%20Insights/How%20technology%20is%20reshaping%20supply%20and%20demand%20for%20natural%20resources/MGI-Beyond-the-Supercycle-Full-report.ashx"
  },
  "Budget 2016â€“17: Farmers Have Got Their Due Share": {
    "pageUrl": null,
    "paperUrl": "https://swarajyamag.com/economy/budget-2016-17-farmers-have-got-their-due-share"
  },
  "COVID-19 Impact on International Migration, Remittances, and Recipient Households in Developing Asia": {
    "pageUrl": null,
    "paperUrl": "https://www.adb.org/sites/default/files/publication/622796/covid-19-impact-migration-remittances-asia.pdf"
  },
  "COVID-19 Pandemic: The Impact of the Virus on Indiaâ€™s GDP": {
    "pageUrl": null,
    "paperUrl": null
  },
  "COVID-19: An Opportunity to Shift the Focus from Megacities to Small Towns": {
    "pageUrl": null,
    "paperUrl": "https://www.moneycontrol.com/news/opinion/covid-19-an-opportunity-to-shift-the-focus-from-megacities-to-small-towns-5138121.html"
  },
  "COVID-19: Disruptive Tech and SME Innovation Can Boost the Fight Against the Virus": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Can Mergers Be Useful to Face Trade Liberalisation? The Role of Technology": {
    "pageUrl": null,
    "paperUrl": "https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxiYWRyaW5hcmF5YW5hbmd8Z3g6MzU4YWFlOTMyMDgyMDc2YQ"
  },
  "Decarbonization and Global Value Chains in ASEAN": {
    "pageUrl": null,
    "paperUrl": "https://www.adb.org/sites/default/files/publication/871976/asean-global-value-chains-resilience-sustainability.pdf"
  },
  "Does Tariff Escalation Affect Export Shares? The Case of Cotton and Coffee in Global Trade": {
    "pageUrl": null,
    "paperUrl": "https://ideas.repec.org/p/ags/aaea11/103946.html"
  },
  "Economics of Recommendation Systems: The Role of Customer Responsiveness to Prices and Quality": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Effects of Phasing Out of MFA Quotas on Indian Garment Exports, 1992â€“2003": {
    "pageUrl": null,
    "paperUrl": "https://ideas.repec.org/a/eaa/eerese/v8y2008i8_4.html"
  },
  "Emissions, Temperature and Economic Growth: An Empirical Analysis of Europe": {
    "pageUrl": null,
    "paperUrl": "https://eprajournals.com/jpanel/upload/822pm_71.EPRA%20JOURNALS-2816.pdf"
  },
  "Energy Subsidies in Russia": {
    "pageUrl": null,
    "paperUrl": "https://documents1.worldbank.org/curated/en/099125011302110190/pdf/P1750280ca1db807e08cea076ac354e401b.pdf"
  },
  "Environmental Effects of AfCFTA": {
    "pageUrl": null,
    "paperUrl": "https://www.atlantis-press.com/journals/jat/125959229"
  },
  "Exchange Rate, Productivity and Exports: The Case of Indian Textile Sector": {
    "pageUrl": null,
    "paperUrl": "http://www.ispepune.org.in/PDF%20ISSUE/2005/web405/0030002.PDF"
  },
  "Export Subsidy Reforms and Productivity Improvements: The Case of the Indian Textile and Clothing Sector": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Extending the GTAP Framework for Public Procurement Analysis": {
    "pageUrl": null,
    "paperUrl": "https://econpapers.repec.org/paper/gtaworkpp/5146.htm"
  },
  "Financial Inclusion in Rural India: A Case Study of Mahuapur": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Financial Market and Growth: Evidence from Post-reforms India": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Fossil Fuel Producing Economies Have Greater Potential for Interfuel Substitution": {
    "pageUrl": null,
    "paperUrl": "https://www.gtap.agecon.purdue.edu/resources/res_display.asp?RecordID=4220"
  },
  "Global Economy Could Lose Over $4 Trillion Due to COVID-19 Impact on Tourism": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Global Land-Use Change and Greenhouse Gas Emissions Due to Recent European Biofuel Policies": {
    "pageUrl": null,
    "paperUrl": "https://gtap.agecon.purdue.edu/uploads/resources/download/7192.pdf"
  },
  "Globalization in Transition: The Future of Trade and Value Chains": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Green Shoots in an Altered Mobility Landscape: The Way Ahead": {
    "pageUrl": null,
    "paperUrl": "https://auto.economictimes.indiatimes.com/news/two-wheelers/opinion-green-shoots-in-an-altered-mobility-landscape-the-way-ahead/77758924"
  },
  "Growth, Instability and Trends in Area, Production and Productivity of Coconuts in India": {
    "pageUrl": null,
    "paperUrl": "https://80f93c2b-6c56-40aa-99a0-3ef9478c207d.filesusr.com/ugd/59ccff_9f936a56aa1b40b7b6da6e6cc1f86664.pdf"
  },
  "How Disruptive Technologies Are Changing Global Trade": {
    "pageUrl": null,
    "paperUrl": "https://www.policycircle.org/opinion/cause-and-effect-how-disruptive-technologies-are-changing-global-trade/"
  },
  "Impact of COVID-19 on the Indian Economy and Auto Industry": {
    "pageUrl": null,
    "paperUrl": "https://auto.economictimes.indiatimes.com/news/industry/opinion-covid-19-impact-on-indian-economy-and-the-auto-industry-whats-ahead-of-us/74862940"
  },
  "Impact of Cross-Border Digital Transmissions on MSMEs in South Africa": {
    "pageUrl": null,
    "paperUrl": "assets/content/papers/MSME-WTOMoratorium-SouthAfrica.pdf"
  },
  "Implications of History for Current Policies and Industrial Structure: The Case of Indian Textile Sector": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Indian MSMEs Set to Be Global Disruptors in Textiles, Clothing, Electrical Equipment Sectors": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Indian Small Business Benefits from the WTO Moratorium on Duties on Electronic Transmissions": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Indiaâ€™s Budget 2016â€“17: A Quick Review": {
    "pageUrl": null,
    "paperUrl": "http://www.marketexpress.in/2016/03/india-budget-2016-17-a-quick-review.html"
  },
  "Indiaâ€™s EV Policy: Missing Elements in the Electric Vehicle Policy Ecosystem": {
    "pageUrl": null,
    "paperUrl": "https://auto.economictimes.indiatimes.com/news/opinion-missing-elements-in-the-electric-vehicle-policy-ecosystem/76106094"
  },
  "Interactions between Technology, Profits, Welfare and Profit Effects of Mergers with Trade Restrictions": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Is There a Monopoly in the Global Digital Services Sector?": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Mega Regional Trade Agreements: Costly Distractions for Developing Countries?": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Mining the Change of Customer Behavior in Dynamic Markets": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Opinion: Disruptive Tech to Drive Aquaculture": {
    "pageUrl": null,
    "paperUrl": "https://telanganatoday.com/opinion-disruptive-tech-to-drive-aquaculture"
  },
  "Potential Economic Impact of COVID-19-Related School Closures": {
    "pageUrl": null,
    "paperUrl": "https://www.adb.org/sites/default/files/publication/794821/ewp-657-economic-impact-covid-19-related-school-closures.pdf"
  },
  "Potential Economic Impact of Fixing the Inverted Customs Duty Structure: The Case of Indian Viscose Fibers": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Potential Effects of the Trans-Pacific Partnership on Forest Industries": {
    "pageUrl": null,
    "paperUrl": "https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxiYWRyaW5hcmF5YW5hbmd8Z3g6Mjk5MGY1ZWM1NjI2ZTFhYw"
  },
  "Potential Impact of 3D Printing on Gig Economy": {
    "pageUrl": null,
    "paperUrl": "https://link.springer.com/chapter/10.1007/978-981-16-8406-7_19?error=cookies_not_supported&code=001e7c4d-a81f-4406-82e4-243c8370ab75"
  },
  "Road Ahead for Indian Auto Industry â€“ Short Term vis-Ã -vis Long Term Recovery": {
    "pageUrl": null,
    "paperUrl": "https://auto.economictimes.indiatimes.com/news/industry/road-ahead-for-indian-auto-industry-short-term-vis-vis-long-term-recovery/77429262"
  },
  "Role of Crop Diversification in Indiaâ€™s Agricultural Growth": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Science, Technology and Innovation Policy 2020: A Way Forward": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Social and Economic Impact of Non-Communicable Diseases": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Socio-Economic Analysis of Effectiveness of Implementation of an Employment Guarantee Scheme at Local Level: A Study of a Village in India": {
    "pageUrl": null,
    "paperUrl": "https://armgpublishing.sumdu.edu.ua/journals/sec/volume-4-issue-2/article-3/"
  },
  "Textile & Steel Industry: Policy, Behavior and Demographic â€“ Are They Related?": {
    "pageUrl": null,
    "paperUrl": "http://www.marketexpress.in/2015/01/textile-steel-industry-policy-behavior-demographic-are-they-related.html"
  },
  "The Bumpy Ride Ahead for Commercial Vehicles and Transportation": {
    "pageUrl": null,
    "paperUrl": "https://auto.economictimes.indiatimes.com/news/commercial-vehicle/mhcv/opinion-the-bumpy-ride-ahead-for-commercial-vehicles-and-transportation/75095248"
  },
  "The Economic Impact of Tariff Eliminations in a U.S.-U.K. Free Trade Agreement": {
    "pageUrl": null,
    "paperUrl": null
  },
  "The Impact of Indiaâ€™s Slowdown on the Commonwealth": {
    "pageUrl": null,
    "paperUrl": null
  },
  "The Potential Impact of GHG Reductions on Air Pollution in India": {
    "pageUrl": null,
    "paperUrl": "https://www.tandfonline.com/doi/abs/10.1080/13547860.2021.1917486"
  },
  "The Proposed EU-India FTA: Implications for Textiles, Wearing Apparel and Leather Products": {
    "pageUrl": null,
    "paperUrl": "https://gtap.agecon.purdue.edu/uploads/resources/download/5321.pdf"
  },
  "The Value of Cross-border Digital Transmissions to MSMEs in Indonesia: Implications for Participation in the WTO E-commerce Moratorium": {
    "pageUrl": null,
    "paperUrl": "assets/content/papers/Value-of-Crossborder-Digital-Transmissions-to-MSMEs-in-Indonesia.pdf"
  },
  "Time Series Analysis of Production in Indian Textiles Sector": {
    "pageUrl": null,
    "paperUrl": "https://ideas.repec.org/a/taf/applec/v42y2010i6p759-768.html"
  },
  "Trade Policy Dilemmas Faced by India: A Tale of Two Industries": {
    "pageUrl": null,
    "paperUrl": "http://www.marketexpress.in/2014/12/trade-policy-dilemmas-faced-by-india-a-tale-of-two-industries.html"
  },
  "Trade and Access to Credit in Import Destinations": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Trade with China and Impacts on North American Wages": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Transparency as a Way of Attaining Quality, Safety and Optimal Food Purchases": {
    "pageUrl": null,
    "paperUrl": "https://armgpublishing.sumdu.edu.ua/wp-content/uploads/2021/01/5.pdf"
  },
  "UK-Commonwealth Trade After Brexit": {
    "pageUrl": null,
    "paperUrl": "https://production-new-commonwealth-files.s3.eu-west-2.amazonaws.com/migrated/inline/ITWP_2021-05_UPDF.pdf"
  },
  "Vehicle Scrappage Scheme: A Much-Needed Policy for Auto Sector": {
    "pageUrl": null,
    "paperUrl": null
  },
  "Water Scarcity in South Asia: A Dynamic Computable General Equilibrium Analysis": {
    "pageUrl": null,
    "paperUrl": "assets/content/papers/AAEA_2015_India_Dynamic.pdf"
  },
  "What Will Be the Impact of Scrappage Policy on Indiaâ€™s EV Market?": {
    "pageUrl": null,
    "paperUrl": "https://auto.economictimes.indiatimes.com/news/what-will-be-the-impact-of-scrappage-policy-on-indias-ev-market/83539997"
  },
  "Why Indiaâ€™s Decision to Pull Out of RCEP Has Both Pros and Cons": {
    "pageUrl": null,
    "paperUrl": "https://economictimes.indiatimes.com/prime/economy-and-policy/why-indias-decision-to-pull-out-of-rcep-has-both-pros-and-cons/primearticleshow/72214498.cms"
  }
};

function repairPaperTitle(value){
  return value
    .replace(/\u00e2\u20ac\u02dc/g, '\u2018')
    .replace(/\u00e2\u20ac\u2122/g, '\u2019')
    .replace(/\u00e2\u20ac\u201c/g, '\u2013')
    .replace(/\u00c3\u00a0/g, '\u00e0');
}

const PAPER_LINK_INDEX = Object.fromEntries(
  Object.entries(PAPER_LINKS).map(([title, links]) => [repairPaperTitle(title), links])
);

const PAPER_SUMMARIES = window.INFISUM_CONTENT?.paperSummaries || {
  "A Graphics Design Framework to Visualize Multi-dimensional Economic Datasets": {
    "about": "A prototype for exploring large, multidimensional economic datasets through an interactive visual environment.",
    "audience": "Economists, policy analysts, data scientists and visualization designers.",
    "method": "Builds a desktop virtual-reality framework and demonstrates it with a time-series, bilateral, multi-sector trade dataset.",
    "insights": "Combining multiple variables and data formats on one canvas can reveal patterns without stripping away important dimensions."
  },
  "A Method to Analyze the Sectoral Impact of Fiscal Support for COVID-19 Affected Economies: The Case of Oceania": {
    "about": "How fiscal stimulus changed the pandemic’s economic and industry-level effects across eight Oceania economies.",
    "audience": "Finance ministries, central banks and economic-development policymakers in Oceania.",
    "method": "Uses a global CGE model with IMF projections and country stimulus packages to compare pandemic scenarios.",
    "insights": "Stimulus cushioned GDP losses, especially in New Zealand and Guam, but education, tourism and skilled employment remained heavily affected."
  },
  "A Quantitative Assessment of Economic Impact of Trade Wars and the ‘Make in India’ Program": {
    "about": "The combined economic effects of Make in India policies and the 2017–18 global trade war.",
    "audience": "Indian industrial, trade and investment policymakers.",
    "method": "Runs applied general-equilibrium simulations of investment incentives, protectionist measures and trade-war shocks.",
    "insights": "The combined policies can benefit the overall economy while still weakening exports, jobs and investment in important sectors."
  },
  "Agricultural Production, Irrigation, Climate Change, and Water Scarcity in India": {
    "about": "How climate change and limited water supplies could reshape Indian agriculture, irrigation, land use and welfare.",
    "audience": "Agricultural, water, climate and food-security policymakers.",
    "method": "Combines an advanced CGE model with biophysical crop-yield projections and water-scarcity constraints.",
    "insights": "Water scarcity reverses possible climate-related gains, reduces irrigation and could create welfare losses of about $3.2 billion in 2030."
  },
  "An Analysis of Long-Run Environmental Impacts and Multi-Criteria-Based Prioritization of the Natural Dyes in the Indian Textile Industry": {
    "about": "Whether greater use of natural dyes can reduce pollution across Indian textile subsectors.",
    "audience": "Textile manufacturers, environmental regulators and sustainable-material researchers.",
    "method": "Uses adoption scenarios, total-dissolved-solids estimates and an expert-weighted AHP ranking of cost, emissions and color fastness.",
    "insights": "Natural dyes can cut emissions substantially, but synthetic-fibre applications need better technology before meeting standards reliably."
  },
  "An Updated Assessment of the Economic Impact of COVID-19": {
    "about": "The main channels through which COVID-19 affected economies and the potential role of fiscal support.",
    "audience": "Economic policymakers, development institutions and crisis-response planners.",
    "method": "Uses the multiregion GTAP CGE model to simulate trade-cost, productivity and fiscal-stimulus shocks.",
    "insights": "Pandemic losses spread through tourism, supply chains, wages, consumption and investment, while policy support can offset part of the damage."
  },
  "Analysing the Effects of the COVID-19 Pandemic on Medical Supply Chains in Commonwealth Countries": {
    "about": "Pandemic disruption to trade in essential medical goods across Commonwealth countries.",
    "audience": "Health, trade and supply-chain officials across the Commonwealth.",
    "method": "Examines medical-goods import and export flows, trade interruptions, consumption changes and import tariffs.",
    "insights": "More resilient medical supply chains require targeted trade and policy changes before the next major disruption."
  },
  "Analysis of India’s Competitive Position in RCEP": {
    "about": "India’s trade competitiveness and exposure across the RCEP region after choosing not to join the agreement.",
    "audience": "Indian trade negotiators, exporters and sector policymakers.",
    "method": "Uses 2020 WITS trade data, revealed comparative advantage, export-intensity indicators and tariff comparisons.",
    "insights": "India has strengths in services and several goods but weak export intensity, broad trade deficits and strong competition across RCEP markets."
  },
  "Analysis of the Role of Tariff Concessions in East Asia": {
    "about": "Whether East Asian trade agreements’ promised tariff reductions are fully reflected in policy analysis.",
    "audience": "Trade negotiators, CGE modelers and regional-integration researchers.",
    "method": "Builds an HS6-level tariff-concession extension for GTAP and compares partial with complete implementation of East Asian agreements.",
    "insights": "Unimplemented commitments materially affect projected outcomes and should be included in baselines for future trade-policy simulations."
  },
  "Analyzing the Potential Market for MSMEs in India": {
    "about": "Which products and foreign markets offer the strongest export opportunities for Indian MSMEs.",
    "audience": "MSME owners, export agencies and Indian trade policymakers.",
    "method": "Combines RCA, RTA, market-demand and export-potential indicators with GTAP estimates for 2022–27.",
    "insights": "Strong opportunities appear in textiles, food, agriculture and machinery, especially in the UAE, China, Bangladesh and the United States."
  },
  "Assessing the Costs of Tariffs on the US ICT Industry: Modeling US-China Tariffs": {
    "about": "The economic cost to the United States of escalating barriers to ICT trade with China.",
    "audience": "U.S. trade officials, technology companies and supply-chain leaders.",
    "method": "Simulates tariff-escalation scenarios modeled on U.S. Section 301 measures.",
    "insights": "Tariffs reduce ICT competitiveness, do little to restore manufacturing and could cost U.S. GDP about $1 trillion over ten years."
  },
  "Assessing the Economic Impact of the Trade Agreement Between the EU and Signatory Countries of the Andean Community": {
    "about": "The expected economic effects of the EU trade agreements with Colombia and Peru.",
    "audience": "EU and Andean trade officials, exporters and development policymakers.",
    "method": "Updates an earlier sustainability impact assessment using the final agreement, participating countries and newer data.",
    "insights": "Colombia and Peru gain modestly in GDP and wages, while bilateral exports rise substantially and EU-wide gains remain comparatively small."
  },
  "AtmaNirbhar Auto Industry: The China Factor": {
    "about": "How dependent India’s automotive supply chain remains on Chinese components despite self-reliance goals.",
    "audience": "Automotive executives, sourcing teams and Indian industrial policymakers.",
    "method": "Reviews official trade, auto-component, investment and industry data alongside supply-chain conditions.",
    "insights": "China supplied about 27% of India’s auto-component imports, making rapid decoupling costly and likely to raise prices in the short run."
  },
  "Barriers in Implementation of Sanitation Projects: A Case Study of Open Defecation Free (ODF) India": {
    "about": "Why rural households may not use toilets even when sanitation infrastructure is available.",
    "audience": "Sanitation agencies, rural-development officials and public-health organizations.",
    "method": "Uses household survey evidence from Bhikarirampur village in Uttar Pradesh.",
    "insights": "Infrastructure alone is insufficient; implementation must address behavioral, social, privacy and access barriers, especially for women."
  },
  "Barriers in Improving Education Quality: A Case Study of Rural India": {
    "about": "The causes of poor education quality in a low-literacy village in Uttar Pradesh.",
    "audience": "Local education officials, schools, NGOs and rural-development planners.",
    "method": "Uses a village-school case study and gathers perspectives from the different groups involved in education.",
    "insights": "Solutions must respond to each stakeholder’s barriers while improving participation and introducing practical digital-classroom support."
  },
  "Beyond the Supercycle: How Technology Is Reshaping Resources": {
    "about": "How automation, renewables, electric mobility and efficiency could transform demand and production for major resources.",
    "audience": "Resource companies, energy ministries, investors and long-term planners.",
    "method": "Models technology-adoption scenarios for oil, gas, coal, iron ore and copper through 2035.",
    "insights": "Technology could unlock $900 billion–$1.6 trillion in annual savings by 2035 and cause demand for several commodities to peak."
  },
  "Budget 2016–17: Farmers Have Got Their Due Share": {
    "about": "A focused assessment of the Indian budget’s treatment of farmers and rural development.",
    "audience": "Agricultural policymakers, rural-development practitioners and budget readers.",
    "method": "Provides a qualitative expert commentary rather than a comprehensive quantitative budget analysis.",
    "insights": "Higher rural allocations are justified, but agricultural growth depends on whether announced programs are implemented effectively."
  },
  "Can Mergers Be Useful to Face Trade Liberalisation? The Role of Technology": {
    "about": "How mergers and trade liberalization affect firm profits in capital- and labor-intensive economies.",
    "audience": "Competition authorities, trade economists and corporate-strategy researchers.",
    "method": "Uses a two-country oligopolistic model with different technologies and cost structures.",
    "insights": "Mergers raise firm profits, but gains from freer trade depend on whether higher output outweighs lower prices."
  },
  "COVID-19 Impact on International Migration, Remittances, and Recipient Households in Developing Asia": {
    "about": "How pandemic shutdowns, job losses and lower oil demand affect Asian migrant workers and remittance-dependent households.",
    "audience": "Migration, labor, social-protection and development policymakers.",
    "method": "Models migrant employment through wage differences and transmits GDP, shutdown and oil-price shocks into wages and remittances.",
    "insights": "Falling employment and wages can sharply reduce remittances, placing vulnerable migrant families and developing economies under added pressure."
  },
  "COVID-19 Pandemic: The Impact of the Virus on India’s GDP": {
    "about": "The early economic shock of COVID-19 across Indian finance, tourism, aviation, manufacturing and consumer sectors.",
    "audience": "Indian business leaders, investors and economic policymakers.",
    "method": "Synthesizes early market, trade, sector and public-health data in a rapid economic assessment.",
    "insights": "Travel and hospitality faced the deepest immediate losses, while supply-chain disruption spread damage into automobiles and consumer goods."
  },
  "COVID-19: An Opportunity to Shift the Focus from Megacities to Small Towns": {
    "about": "Whether more balanced regional development could reduce India’s vulnerability to pandemics and megacity congestion.",
    "audience": "Urban planners, regional-development agencies and employment policymakers.",
    "method": "Combines household data from 18 urban areas with a GTAP-based shutdown scenario.",
    "insights": "Poor urban households lack space, water and hygiene protections; stronger small-town employment could reduce forced migration and urban risk."
  },
  "COVID-19: Disruptive Tech and SME Innovation Can Boost the Fight Against the Virus": {
    "about": "How AI, machine learning, blockchain and small-business innovation can support pandemic response.",
    "audience": "Technology entrepreneurs, health agencies, investors and innovation policymakers.",
    "method": "Reviews documented applications in genome analysis, drug discovery, diagnostics, tracing and medical supply chains.",
    "insights": "Disruptive technology can speed research, diagnosis and traceability while creating practical opportunities for Indian SMEs."
  },
  "Decarbonization and Global Value Chains in ASEAN": {
    "about": "The economic and value-chain consequences of ASEAN countries meeting emissions targets.",
    "audience": "ASEAN climate, energy, trade and industrial policymakers.",
    "method": "Links GTAP-E-Power and GTAP value-added models under business-as-usual and national-target scenarios.",
    "insights": "Meeting targets imposes GDP and value-added costs, but estimated social savings from lower carbon emissions can outweigh those losses."
  },
  "Does Tariff Escalation Affect Export Shares? The Case of Cotton and Coffee in Global Trade": {
    "about": "Why tariff escalation affects processed cotton and coffee exports differently across developing countries.",
    "audience": "Trade officials, commodity exporters and value-chain researchers.",
    "method": "Extends the GTAP 2004 database with detailed UN and industry data and simulates lower processing tariffs.",
    "insights": "Tariff escalation does not have one uniform effect; outcomes depend on tariff gaps and each country’s sector conditions."
  },
  "Economics of Recommendation Systems: The Role of Customer Responsiveness to Prices and Quality": {
    "about": "A recommendation method that accounts for how strongly customers respond to price and quality changes.",
    "audience": "E-commerce teams, recommendation-system researchers and marketing analysts.",
    "method": "Adds an elasticity-based second stage to collaborative or content filtering and illustrates it with movie-rating data.",
    "insights": "Recommendations can be refined into buy or not-buy outcomes while estimating purchase changes caused by price or quality shifts."
  },
  "Effects of Phasing Out of MFA Quotas on Indian Garment Exports, 1992–2003": {
    "about": "Whether removing Multi Fibre Arrangement quotas helped Indian garment exports.",
    "audience": "Textile exporters, trade officials and applied-economics researchers.",
    "method": "Tests monthly data using structural-break, split-sample and intervention-analysis methods.",
    "insights": "Quota phase-out produced a positive, statistically significant and long-lasting improvement in Indian garment exports."
  },
  "Emissions, Temperature and Economic Growth: An Empirical Analysis of Europe": {
    "about": "The relationship among greenhouse-gas emissions, temperature change and economic growth across Europe.",
    "audience": "European climate policymakers, economists and environmental researchers.",
    "method": "Applies time-series clustering to 33 countries from 1990–2016 and tests the environmental Kuznets-curve pattern.",
    "insights": "Country clusters show distinct emissions-growth-temperature relationships, supporting more tailored environmental policy."
  },
  "Energy Subsidies in Russia": {
    "about": "The economic and regional consequences of removing oil, gas and electricity subsidies in Russia.",
    "audience": "Russian energy, finance, social-protection and regional policymakers.",
    "method": "Uses a regionally disaggregated Russian CGE model, including opportunity costs and fuel-substitution responses.",
    "insights": "Subsidy reform must be paired with competitiveness, efficiency, governance and social-protection measures to manage uneven impacts."
  },
  "Environmental Effects of AfCFTA": {
    "about": "How African trade liberalization under AfCFTA could change economic activity and pollution.",
    "audience": "African trade, climate and development policymakers.",
    "method": "Extends GTAP 10a with emissions accounting for CO2 and other greenhouse gases and pollutants.",
    "insights": "Most members gain trade, GDP and jobs, but transport and production raise emissions—especially non-CO2 gases—in many countries."
  },
  "Exchange Rate, Productivity and Exports: The Case of Indian Textile Sector": {
    "about": "How exchange rates, prices and productivity influence Indian textile and apparel exports.",
    "audience": "Textile exporters, monetary policymakers and trade economists.",
    "method": "Uses long-run cointegration, Granger causality, impulse responses and variance decomposition on historical data.",
    "insights": "Exchange rates and export prices have clear long-run links to exports; productivity’s role is present but less conclusive."
  },
  "Export Subsidy Reforms and Productivity Improvements: The Case of the Indian Textile and Clothing Sector": {
    "about": "Whether productivity growth can offset losses from removing Indian textile export subsidies.",
    "audience": "Trade ministries, textile firms and industrial-development policymakers.",
    "method": "Runs GTAP policy simulations for subsidy removal alone and alongside 3.5% productivity growth.",
    "insights": "Subsidy removal alone reduces Indian welfare, while simultaneous productivity investment turns the result modestly positive."
  },
  "Extending the GTAP Framework for Public Procurement Analysis": {
    "about": "A better way to represent government procurement in global trade-policy models.",
    "audience": "Government procurement officials, trade negotiators and CGE model developers.",
    "method": "Disaggregates government investment and import origins in GTAP, modifies the model and demonstrates an illustrative application.",
    "insights": "Detailed procurement data are essential for estimating how discriminatory purchasing rules affect trade, employment and welfare."
  },
  "Financial Inclusion in Rural India: A Case Study of Mahuapur": {
    "about": "How rural households use banking, credit, subsidies and income sources in Mahuapur village.",
    "audience": "Financial-inclusion agencies, banks, microfinance providers and rural policymakers.",
    "method": "Interviews households from varied socioeconomic groups about finances, policies, spending and aspirations.",
    "insights": "Jan Dhan improved saving and bank access, but caste, shrinking farms and limited microfinance still constrain inclusion."
  },
  "Financial Market and Growth: Evidence from Post-reforms India": {
    "about": "The relationship between India’s stock and credit markets and economic growth after liberalization.",
    "audience": "Financial regulators, economists and capital-market policymakers.",
    "method": "Analyzes stationary time-series variables from 1994–2010 and tests long-run relationships with GDP.",
    "insights": "Stock-market development has stronger and more significant long-run links with growth than credit-market development."
  },
  "Fossil Fuel Producing Economies Have Greater Potential for Interfuel Substitution": {
    "about": "Why countries with fossil-fuel production may switch among energy sources more easily.",
    "audience": "Energy and climate policymakers, modelers and resource economists.",
    "method": "Extends interfuel-substitution analysis to include transaction costs, technological adjustment and production potential, then runs policy simulations.",
    "insights": "Fossil-fuel producers show higher substitution elasticities, potentially lowering the cost of climate and energy policies."
  },
  "Global Economy Could Lose Over $4 Trillion Due to COVID-19 Impact on Tourism": {
    "about": "The direct and economy-wide cost of the pandemic-driven collapse in international tourism.",
    "audience": "Tourism ministries, development institutions and recovery planners.",
    "method": "Uses GTAP simulations under three international-arrival scenarios, excluding the effect of stimulus policies.",
    "insights": "Tourism losses multiply through suppliers and labor markets, with developing, low-vaccination economies bearing the largest burden."
  },
  "Global Land-Use Change and Greenhouse Gas Emissions Due to Recent European Biofuel Policies": {
    "about": "How EU biodiesel caps and anti-dumping measures affect trade, land use and emissions worldwide.",
    "audience": "EU energy, agriculture, trade and climate policymakers.",
    "method": "Uses GTAP-BIO to simulate higher biodiesel demand and import prices as policy shocks.",
    "insights": "Imports can rise despite trade measures, while demand shifts land use and emissions far beyond Europe through food and feed markets."
  },
  "Globalization in Transition: The Future of Trade and Value Chains": {
    "about": "How global production and trade patterns changed from 1995–2017.",
    "audience": "Global companies, trade policymakers, investors and supply-chain strategists.",
    "method": "Analyzes 23 value chains across 43 countries and groups them into six structural archetypes.",
    "insights": "Goods trade is less intensive, services and intangibles matter more, labor-cost arbitrage is declining and production is becoming more regional."
  },
  "Green Shoots in an Altered Mobility Landscape: The Way Ahead": {
    "about": "The uneven recovery and longer-term prospects of India’s vehicle market after lockdown.",
    "audience": "Automotive manufacturers, mobility investors and industrial policymakers.",
    "method": "Reviews company sales, industry forecasts, rural demand, emissions rules and electric-vehicle policy.",
    "insights": "Two- and three-wheelers have stronger prospects because of affordability, rural demand, social distancing and EV incentives."
  },
  "Growth, Instability and Trends in Area, Production and Productivity of Coconuts in India": {
    "about": "Long-run production, harvested-area and productivity trends in major coconut-producing countries and India.",
    "audience": "Agricultural planners, coconut producers and commodity researchers.",
    "method": "Uses growth rates, instability measures, ARIMA and exponential smoothing on 1990–2018 data, with projections through 2021.",
    "insights": "Major producers appear broadly stable; fitted time-series models provide short-term projections for Indian area, output and productivity."
  },
  "How Disruptive Technologies Are Changing Global Trade": {
    "about": "How AI, automation, data science and 3D printing are changing production, trade and trade rules.",
    "audience": "Trade officials, technology firms, workforce planners and international organizations.",
    "method": "A policy commentary synthesizing technology trends and their implications for value chains and regulation.",
    "insights": "Technology can lower costs and improve productivity, but also creates new questions about skills, protectionism, data flows and customs revenue."
  },
  "Impact of COVID-19 on the Indian Economy and Auto Industry": {
    "about": "The pandemic’s early economic and operational effects on India, especially its automobile industry.",
    "audience": "Automotive leaders, economic policymakers and recovery planners.",
    "method": "Combines early public-health, macroeconomic, oil-price, policy and industry evidence in a scenario-based commentary.",
    "insights": "Lockdowns deepen an existing auto slowdown, but fiscal support, low oil prices and timely policy action can improve recovery prospects."
  },
  "Impact of Cross-Border Digital Transmissions on MSMEs in South Africa": {
    "about": "How imported digital products and services affect South African MSME growth.",
    "audience": "South African MSMEs, digital-trade officials and WTO policymakers.",
    "method": "Uses MSME employment, productivity and size time series with digital-import data from OECD input-output tables.",
    "insights": "Digital imports contribute positively to MSME performance, supporting continued duty-free electronic transmissions."
  },
  "Implications of History for Current Policies and Industrial Structure: The Case of Indian Textile Sector": {
    "about": "How the history of Indian textiles still shapes present industrial structure, competitiveness and pollution.",
    "audience": "Textile policymakers, manufacturers and industrial historians.",
    "method": "Synthesizes historical and contemporary studies of the sector.",
    "insights": "Small-scale production supported entrepreneurship but constrained competitiveness, while abandoning older low-pollution techniques created environmental costs."
  },
  "Indian MSMEs Set to Be Global Disruptors in Textiles, Clothing, Electrical Equipment Sectors": {
    "about": "A brief report notice highlighting export-growth opportunities for Indian MSMEs.",
    "audience": "Indian MSME owners, exporters and industrial-development agencies.",
    "method": "The Infisum page summarizes an external report; it does not provide enough detail to verify the underlying method.",
    "insights": "The cited report projects export growth above 60% by 2027 for several product groups, including wood, hides, rubber, plastics and food."
  },
  "Indian Small Business Benefits from the WTO Moratorium on Duties on Electronic Transmissions": {
    "about": "How imported digital services support employment, output and productivity in Indian MSMEs.",
    "audience": "Indian small businesses, trade ministries and WTO negotiators.",
    "method": "Uses recent Indian government MSME data to estimate relationships between imported digital inputs and business outcomes.",
    "insights": "A 1% rise in digital-service inputs is associated with higher employment, output and productivity; new duties could weaken those gains."
  },
  "India’s Budget 2016–17: A Quick Review": {
    "about": "A focused commentary on agriculture, rural development, tobacco control and public investment in India’s 2016–17 budget.",
    "audience": "Budget readers, rural-policy professionals and public-finance policymakers.",
    "method": "Qualitative expert review without a comprehensive numerical assessment.",
    "insights": "The budget is unusually inclusive, but ambitious rural goals require clearer design, adequate funding and credible implementation."
  },
  "India’s EV Policy: Missing Elements in the Electric Vehicle Policy Ecosystem": {
    "about": "The economic, industrial and trade gaps in India’s transition to electric vehicles.",
    "audience": "EV policymakers, automakers, battery investors and transport planners.",
    "method": "Uses policy review and lifecycle cost, import-dependence and market-structure comparisons.",
    "insights": "EVs improve air quality, but without domestic batteries and components they could shrink domestic value added and worsen the trade balance."
  },
  "Interactions between Technology, Profits, Welfare and Profit Effects of Mergers with Trade Restrictions": {
    "about": "How trade liberalization and mergers affect prices, output, profits and importer welfare under different technologies.",
    "audience": "Trade economists, competition regulators and industrial-organization researchers.",
    "method": "Uses a two-country oligopoly model with capital- and labor-intensive exporters.",
    "insights": "Freer trade raises output and lowers prices, but profit effects are ambiguous; importer welfare rises when initial restrictions are not extreme."
  },
  "Is There a Monopoly in the Global Digital Services Sector?": {
    "about": "Whether dominance by a few major digital platforms should automatically be treated as monopoly power.",
    "audience": "Competition regulators, digital-platform firms and technology-policy readers.",
    "method": "An economic commentary using network effects, marginal costs, switching costs and cross-market competition.",
    "insights": "Concentration can create user value through networks, though platforms still need scrutiny where data, attention and market reach reinforce power."
  },
  "Mega Regional Trade Agreements: Costly Distractions for Developing Countries?": null,
  "Mining the Change of Customer Behavior in Dynamic Markets": {
    "about": "A way to detect when customers’ purchasing sequences and quantities change over time.",
    "audience": "Retail analysts, marketing teams, inventory planners and data-mining researchers.",
    "method": "Develops a fuzzy quantitative sequential change-mining model and tests it on real and synthetic datasets.",
    "insights": "The model identifies actionable pattern changes and remains scalable, helping managers avoid outdated marketing and inventory decisions."
  },
  "Opinion: Disruptive Tech to Drive Aquaculture": {
    "about": "The growing role of cross-disciplinary technology startups in fisheries and aquaculture.",
    "audience": "Aquaculture entrepreneurs, incubators, researchers and innovation funders.",
    "method": "An expert commentary informed by evaluation of startup proposals submitted to BIRAC.",
    "insights": "Computer engineers and business graduates are bringing disruptive tools into aquaculture, widening the sector’s innovation base."
  },
  "Potential Economic Impact of COVID-19-Related School Closures": {
    "about": "The long-term economic scarring caused by pandemic learning losses.",
    "audience": "Education ministries, labor policymakers and development institutions.",
    "method": "Uses GTAP data and a CGE model to connect school closures with future growth and employment.",
    "insights": "Global GDP losses grow over time and could reach $943 billion in 2030, with poorer and rural students facing greater harm."
  },
  "Potential Economic Impact of Fixing the Inverted Customs Duty Structure: The Case of Indian Viscose Fibers": {
    "about": "The effect of removing India’s tariff disadvantage on imported pulp used to make viscose fibre.",
    "audience": "Textile and customs policymakers, viscose producers and trade analysts.",
    "method": "Uses a GTAP CGE model to simulate correction of the inverted duty structure.",
    "insights": "The reform is estimated to raise Indian GDP by about $18 million and exports by about $10.75 million."
  },
  "Potential Effects of the Trans-Pacific Partnership on Forest Industries": {
    "about": "A methodological critique of estimates for TPP effects on forestry industries.",
    "audience": "Forestry economists, trade modelers and policy researchers.",
    "method": "Compares assumptions in the Global Forest Products Model with GTAP-based TPP studies.",
    "insights": "Modeling tariffs and macroeconomic change separately may double-count effects; non-tariff rules and consistent dynamic baselines should be included."
  },
  "Potential Impact of 3D Printing on Gig Economy": {
    "about": "How 3D printing adoption could affect India’s employment, GDP, trade and industry output.",
    "audience": "Manufacturing policymakers, 3D-printing firms and workforce planners.",
    "method": "Uses GTAP CGE analysis under a 10% adoption scenario.",
    "insights": "The model projects employment up 2.38% and GDP up 1.26%, with gains concentrated in manufacturing, aerospace, automotive and related services."
  },
  "Road Ahead for Indian Auto Industry – Short Term vis-à-vis Long Term Recovery": {
    "about": "Whether improving monthly vehicle sales represented a durable recovery after India’s lockdown.",
    "audience": "Automotive executives, investors and industrial policymakers.",
    "method": "Compares month-on-month, year-on-year and quarterly sales across major two- and four-wheeler manufacturers.",
    "insights": "Sequential sales showed returning confidence, but weak annual comparisons indicated that full long-term recovery remained distant."
  },
  "Role of Crop Diversification in India’s Agricultural Growth": {
    "about": "How diversifying away from a narrow cereal base can improve Indian farm incomes, resilience and sustainability.",
    "audience": "Agricultural ministries, farmer organizations and rural-development researchers.",
    "method": "Reviews policy and production trends and calculates a crop-level Herfindahl–Hirschman concentration index.",
    "insights": "India is already relatively diversified, but further movement toward high-value crops can strengthen resilience and respond to changing diets."
  },
  "Science, Technology and Innovation Policy 2020: A Way Forward": {
    "about": "A review of India’s proposed science, technology and innovation policy and the reforms needed around it.",
    "audience": "Science ministries, universities, research institutions and innovation-policy leaders.",
    "method": "Policy commentary comparing India’s R&D investment and consultation framework with international practice.",
    "insights": "India needs higher R&D investment, inclusive consultation and stronger links among health, education, industry and research."
  },
  "Social and Economic Impact of Non-Communicable Diseases": {
    "about": "The social and economic burden of diabetes, depression, Alzheimer’s disease and hypertension in India, Mexico, the U.S. and globally.",
    "audience": "Health ministries, public-health researchers and economic planners.",
    "method": "Combines a thorough literature review with additional calculations and estimates, including demographic comparisons.",
    "insights": "Non-communicable diseases create broad social and economic costs that vary by disease, country and population group."
  },
  "Socio-Economic Analysis of Effectiveness of Implementation of an Employment Guarantee Scheme at Local Level: A Study of a Village in India": {
    "about": "How India’s rural employment-guarantee program functions at the village level.",
    "audience": "Local and national social-protection agencies and rural administrators.",
    "method": "Combines a participant survey in Sanatpur with official statistics and descriptive analysis.",
    "insights": "Low awareness and limited financial access weaken implementation; nearly 70% of surveyed rural residents lacked individual bank accounts."
  },
  "Textile & Steel Industry: Policy, Behavior and Demographic – Are They Related?": {
    "about": "Why industrial policy should account for consumer, producer and demographic behavior in textiles and steel.",
    "audience": "Indian industrial policymakers and sector business leaders.",
    "method": "A qualitative policy commentary using fiscal structure and consumption behavior as sector examples.",
    "insights": "Price and demand responses are more complex than headline policy changes suggest, so major reforms need sector-specific behavioral analysis."
  },
  "The Bumpy Ride Ahead for Commercial Vehicles and Transportation": {
    "about": "COVID-19’s effect on Indian commercial vehicles, freight transport and component supply chains.",
    "audience": "Truck manufacturers, logistics firms, suppliers and transport policymakers.",
    "method": "Combines GTAP data, India’s input-output table and industry evidence on sales and sourcing.",
    "insights": "The sector’s China dependence is moderate but tier-two and tier-three suppliers are vulnerable; recovery requires supply-chain redesign and technology."
  },
  "The Economic Impact of Tariff Eliminations in a U.S.-U.K. Free Trade Agreement": null,
  "The Impact of India’s Slowdown on the Commonwealth": {
    "about": "How slower Indian growth affects trade and investment across Commonwealth economies.",
    "audience": "Commonwealth trade ministries, development agencies and exporters.",
    "method": "Uses GTAP analysis for 2020 plus a qualitative product-and-country assessment.",
    "insights": "The largest effects fall on India’s exports to least-developed and Sub-Saharan countries and imports from developed Commonwealth members."
  },
  "The Potential Impact of GHG Reductions on Air Pollution in India": {
    "about": "Whether cutting greenhouse gases under India’s Paris commitments also reduces harmful local air pollution.",
    "audience": "Indian climate, energy, health and air-quality policymakers.",
    "method": "Uses economy-wide modeling of Paris-aligned GHG reductions and air-pollution changes across sectors.",
    "insights": "Climate and clean-air goals can reinforce or conflict with each other, so policy should target both rather than assume automatic co-benefits."
  },
  "The Proposed EU-India FTA: Implications for Textiles, Wearing Apparel and Leather Products": {
    "about": "How an EU–India free-trade agreement could affect India’s textile, apparel and leather sectors.",
    "audience": "EU and Indian trade officials, textile exporters and industry groups.",
    "method": "Uses GTAP 7 to compare full bilateral tariff elimination with a sector-focused liberalization scenario.",
    "insights": "India gains in both scenarios, but benefits concentrate in selected products and do little to improve the existing specialization pattern."
  },
  "The Value of Cross-border Digital Transmissions to MSMEs in Indonesia: Implications for Participation in the WTO E-commerce Moratorium": {
    "about": "How imported digital transmissions support Indonesian MSMEs and the wider economy.",
    "audience": "Indonesian small businesses, digital-trade officials and WTO negotiators.",
    "method": "Quantitatively analyzes digital imports alongside MSME and economic indicators in Indonesia.",
    "insights": "Digitalization increasingly supports service-oriented MSMEs, strengthening the case for maintaining duty-free electronic transmissions."
  },
  "Time Series Analysis of Production in Indian Textiles Sector": {
    "about": "Whether standard production relationships hold in India’s textile industry over time.",
    "audience": "Textile economists, manufacturers and industrial policymakers.",
    "method": "Uses time-series cointegration and shock-response analysis for output, capital, labor and productivity.",
    "insights": "Capital and output move together long term, while employment and capital shocks can reduce output or future productivity."
  },
  "Trade and Access to Credit in Import Destinations": {
    "about": "How access to finance in African markets affects exports from India.",
    "audience": "Indian and African trade ministries, banks and trade-finance institutions.",
    "method": "Estimates several gravity-model specifications with and without banking, credit, interest-rate and registry variables.",
    "insights": "Better credit access allows even poorer African countries to import more, making trade finance central to India–Africa trade growth."
  },
  "Trade Policy Dilemmas Faced by India: A Tale of Two Industries": {
    "about": "The tension between protecting Indian industries and exposing them to competition so they become globally competitive.",
    "audience": "Indian trade and industrial policymakers and business leaders.",
    "method": "A qualitative policy commentary using industry examples and export-oriented industrialization experience.",
    "insights": "Temporary protection can help, but lasting growth depends on firms learning to compete domestically and internationally."
  },
  "Trade with China and Impacts on North American Wages": {
    "about": "How China’s trade growth affects the wage gap between skilled and unskilled workers in North America.",
    "audience": "Labor and trade policymakers, economists and inequality researchers.",
    "method": "Builds on trade and labor-supply theory to model China’s growth, imports, migration and skill-premium effects.",
    "insights": "Trade is one of several forces shaping wage inequality, alongside migration, education and skill-biased technological change."
  },
  "Transparency as a Way of Attaining Quality, Safety and Optimal Food Purchases": {
    "about": "How food transparency, labels and trust affect consumers’ purchasing decisions.",
    "audience": "Food retailers, regulators, brands and consumer-behavior researchers.",
    "method": "Combines a literature review with six semi-structured consumer interviews in Washington State.",
    "insights": "Consumers favor organic and certified food and want transparency, but often rely on assumptions, stores and labels rather than source knowledge."
  },
  "UK-Commonwealth Trade After Brexit": {
    "about": "How post-Brexit UK trade agreements may redirect trade away from Commonwealth developing economies.",
    "audience": "UK and Commonwealth trade officials, exporters and development agencies.",
    "method": "Uses a multi-sector GTAP model to simulate several UK trade-agreement scenarios.",
    "insights": "New agreements with efficient developed partners may erode market access for less-developed Commonwealth exporters."
  },
  "Vehicle Scrappage Scheme: A Much-Needed Policy for Auto Sector": {
    "about": "The design and likely economic and environmental effects of India’s vehicle-scrappage policy.",
    "audience": "Vehicle owners, automakers, recyclers and transport policymakers.",
    "method": "Reviews policy rules, vehicle-age data, compliance deadlines, incentives and expected industry effects.",
    "insights": "Organized scrapping can lower pollution, create recycling jobs and cheaper materials, but depends on testing capacity and owner compliance."
  },
  "Water Scarcity in South Asia: A Dynamic Computable General Equilibrium Analysis": {
    "about": "The long-run economy-wide consequences of worsening water scarcity across South Asia.",
    "audience": "Water, agriculture and economic-development policymakers.",
    "method": "Combines dynamic and comparative-static CGE models under different assumptions about replacing water with other inputs.",
    "insights": "Without better water productivity, potential 2030 GDP losses could range from 7% to 45%, with strong food-price effects."
  },
  "What Will Be the Impact of Scrappage Policy on India’s EV Market?": {
    "about": "Whether India’s scrappage incentives will accelerate electric-vehicle adoption.",
    "audience": "Vehicle buyers, EV manufacturers and transport-policy officials.",
    "method": "Uses policy comparison, vehicle-market structure and consumer cost-benefit analysis.",
    "insights": "The policy supports greener recovery but is likely to produce only a mild near-term EV sales increase because conventional alternatives remain competitive."
  },
  "Why India’s Decision to Pull Out of RCEP Has Both Pros and Cons": {
    "about": "The economic and strategic trade-offs in India’s decision not to join RCEP.",
    "audience": "Indian trade officials, industry groups and foreign-policy analysts.",
    "method": "A policy commentary drawing on GTAP estimates, trade balances and sector-level evidence.",
    "insights": "Withdrawal avoids some import and sector risks, but sacrifices rule-making influence and gains that were modest economically yet strategically meaningful."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initTyper();
  initReveals();
  initIndustries();
  initTabs();
  initContactForm();
  initSpotlightFilter();
  initPaperCardImages();
  initPaperLibrary();
  initPeopleDirectory();
});

/* ---------- Floating nav ---------- */
function initNav(){
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (toggle){
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('.nav-links a').forEach(a =>
      a.addEventListener('click', () => nav.classList.remove('open'))
    );
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') && !nav.contains(e.target)) nav.classList.remove('open');
    });
  }
}

/* ---------- Hero typewriter (home page) ---------- */
function initTyper(){
  const el = document.getElementById('typer');
  if (!el) return;

  const words = ['global trade.', 'energy markets.', 'supply chains.', 'public policy.', 'disruptive technology.'];
  let w = 0, i = 0, deleting = false;

  const tick = () => {
    const word = words[w];
    if (!deleting){
      i++;
      el.textContent = word.slice(0, i);
      if (i === word.length){
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      i--;
      el.textContent = word.slice(0, i);
      if (i === 0){
        deleting = false;
        w = (w + 1) % words.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 55);
  };
  tick();
}

/* ---------- Scroll reveals ---------- */
function initReveals(){
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.04, rootMargin: '0px 0px -20px 0px' });

  items.forEach(el => io.observe(el));
}

/* ---------- Industries data ---------- */
const CHECK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const INDUSTRIES = window.INFISUM_CONTENT?.industries || [
  { slug:'agriculture', name:'Agriculture & Food', icon:'<path d="M4 20c8 0 14-6 14-14 0 0-12-2-14 8-1 5 0 6 0 6Z"/><path d="M4 20c0-4 2-8 6-10"/>',
    summary:'We model how trade, climate and subsidies affect prices, production and food security.',
    points:['Crop & commodity price modelling','Food-security & subsidy impact analysis','Climate-shock scenario planning'] },
  { slug:'energy', name:'Energy', icon:'<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
    summary:'We model energy markets, subsidy reform, transition pathways and distributional effects.',
    points:['Subsidy reform & pricing analysis','Energy-transition scenario modelling','Distributional impact assessment'],
    study:{ tag:'Energy', title:'Energy Subsidies in Russia', sum:'A general-equilibrium view of subsidy reform and its distributional consequences.', href:'spotlight.html#energy' } },
  { slug:'manufacturing', name:'Manufacturing', icon:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    summary:'We measure how tariffs, input costs and automation affect output, jobs and competitiveness.',
    points:['Tariff & input-cost pass-through','Competitiveness & productivity modelling','Automation impact studies'] },
  { slug:'retail', name:'Retail & Consumer Goods', icon:'<path d="M6 8h12l-1 12H7L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    summary:'We connect prices, trade policy and income changes to consumer demand.',
    points:['Consumer-demand & price elasticity','Trade-policy pass-through to retail','Category growth forecasting'] },
  { slug:'financial-services', name:'Financial Services', icon:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
    summary:'We translate policy and market shifts into balance-sheet, portfolio and risk impacts.',
    points:['Econometric & financial modelling','Regulatory-impact assessment','Portfolio & risk scenario analysis'] },
  { slug:'healthcare', name:'Healthcare', icon:'<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
    summary:'We model health-system costs, access and outcomes for public and institutional decisions.',
    points:['Health-system cost modelling','Access & outcomes analysis','Public-health policy simulation'] },
  { slug:'technology', name:'Technology & Digital', icon:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    summary:'We measure how data flows, platform rules and connectivity affect firms and economies.',
    points:['Digital-trade & data-flow impact','Platform & market-structure analysis','Connectivity & MSME growth studies'],
    study:{ tag:'Digital Trade', title:'Cross-border Digital Transmissions & Indonesian MSMEs', sum:'Quantifying how data-flow policy shapes the growth trajectory of micro, small and medium enterprises.', href:'spotlight.html#indonesia' } },
  { slug:'logistics', name:'Transportation & Logistics', icon:'<path d="M3 16V6h9v10"/><path d="M12 10h5l4 4v2h-2"/><circle cx="7.5" cy="18" r="1.7"/><circle cx="16.5" cy="18" r="1.7"/>',
    summary:'We test transport and logistics networks against disruption, cost and demand shocks.',
    points:['Route & network flow modelling','Disruption & resilience stress-testing','Cost-to-serve optimisation'] },
  { slug:'textiles', name:'Textiles & Apparel', icon:'<path d="M8 4 4 7v3h3v10h10V10h3V7l-4-3-3 2h-2L8 4Z"/>',
    summary:'We model the textile value chain from raw inputs to finished-goods trade.',
    points:['Value-chain & duty-structure modelling','Fiber-to-finished-goods trade analysis','Sectoral competitiveness studies'] },
  { slug:'trade', name:'Trade & Customs', icon:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9Z"/>',
    summary:'We measure the effects of tariffs, customs rules and trade liberalization.',
    points:['Customs-duty & tariff-structure analysis','Trade-liberalization impact modelling','Cross-border compliance cost studies'],
    study:{ tag:'Trade Policy', title:'Inverted Customs-Duty Structure & Indian Viscose Fibers', sum:'Modelling the sectoral effects of duty inversion across the Indian textile value chain.', href:'spotlight.html#viscose' } },
  { slug:'construction', name:'Construction & Infrastructure', icon:'<path d="M3 21h18M6 21V9l6-4 6 4v12M10 21v-6h4v6"/>',
    summary:'We measure how infrastructure investment affects growth, jobs and regional development.',
    points:['Public-investment impact modelling','Regional development scenario analysis','Infrastructure financing studies'] },
  { slug:'public-sector', name:'Public Sector & Government', icon:'<path d="M4 21h16M5 21V10M19 21V10M3 10l9-5 9 5M8 10v11M12 10v11M16 10v11"/>',
    summary:'We build fiscal and policy models for governments and multilateral institutions.',
    points:['Fiscal-policy & budget-impact modelling','Cross-agency scenario planning','Sustainable-development alignment'] },
];

const INDUSTRY_IMAGES = window.INFISUM_CONTENT?.industryImages || {
  agriculture: {
    src:'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1400&q=82',
    alt:'Cultivated fields and agricultural land'
  },
  energy: {
    src:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=82',
    alt:'Energy infrastructure and electricity transmission'
  },
  manufacturing: {
    src:'https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&w=1400&q=82',
    alt:'A modern manufacturing facility'
  },
  retail: {
    src:'https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1400&q=82',
    alt:'Shoppers moving through a retail store'
  },
  'financial-services': {
    src:'https://images.unsplash.com/photo-1616803140344-6682afb13cda?auto=format&fit=crop&w=1400&q=82',
    alt:'Financial market information and analysis'
  },
  healthcare: {
    src:'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1400&q=82',
    alt:'Healthcare professionals working in a hospital'
  },
  technology: {
    src:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=82',
    alt:'Digital technology and connected infrastructure'
  },
  logistics: {
    src:'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1400&q=82',
    alt:'Freight moving through a global logistics network'
  },
  textiles: {
    src:'https://images.unsplash.com/photo-1655122878062-a9e885391a1b?auto=format&fit=crop&w=1400&q=82',
    alt:'Fabric and textile production'
  },
  trade: {
    src:'https://images.unsplash.com/photo-1706499856012-14f062c72b49?auto=format&fit=crop&w=1400&q=82',
    alt:'Cargo containers supporting global trade'
  },
  construction: {
    src:'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=82',
    alt:'Construction workers on an infrastructure project'
  },
  'public-sector': {
    src:'https://images.unsplash.com/photo-1780396269429-e20eaa1a1cd2?auto=format&fit=crop&w=1400&q=82',
    alt:'Civic architecture representing public institutions'
  }
};

const HOME_INDUSTRY_IMAGES = window.INFISUM_CONTENT?.homeIndustryImages || {
  agriculture: {
    src:'https://plus.unsplash.com/premium_photo-1663945779302-b46b12b6d811?auto=format&fit=crop&w=1200&q=82',
    alt:'Crops being harvested in an agricultural field'
  },
  energy: {
    src:'https://plus.unsplash.com/premium_photo-1678167657579-a0986938f0c8?auto=format&fit=crop&w=1200&q=82',
    alt:'Wind turbines producing renewable energy'
  },
  manufacturing: {
    src:'https://plus.unsplash.com/premium_photo-1661476116614-0b35face5f2a?auto=format&fit=crop&w=1200&q=82',
    alt:'A worker on a manufacturing line'
  },
  retail: {
    src:'https://images.unsplash.com/photo-1670684684445-a4504dca0bbc?auto=format&fit=crop&w=1200&q=82',
    alt:'Customers shopping in a retail store'
  },
  'financial-services': {
    src:'https://plus.unsplash.com/premium_photo-1661718074815-1564d2eb920f?auto=format&fit=crop&w=1200&q=82',
    alt:'Financial analysis displayed on a computer'
  },
  healthcare: {
    src:'https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?auto=format&fit=crop&w=1200&q=82',
    alt:'Healthcare professionals working together'
  },
  technology: {
    src:'https://plus.unsplash.com/premium_photo-1740363268539-cd9093c3b5d1?auto=format&fit=crop&w=1200&q=82',
    alt:'Servers inside a modern data center'
  },
  logistics: {
    src:'https://plus.unsplash.com/premium_photo-1661964180970-c023a0363e4d?auto=format&fit=crop&w=1200&q=82',
    alt:'Freight moving through a rail logistics network'
  }
};

function industryIconSvg(ind){
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ind.icon}</svg>`;
}

function initIndustries(){
  const grid = document.getElementById('indGrid');
  if (!grid) return;

  const isModalGrid = grid.hasAttribute('data-modal');
  const isEditorialGrid = grid.hasAttribute('data-editorial');
  const isCompactEditorialGrid = grid.hasAttribute('data-editorial-compact');
  const limit = parseInt(grid.getAttribute('data-limit') || '0', 10);
  const list = limit ? INDUSTRIES.slice(0, limit) : INDUSTRIES;

  if (isEditorialGrid || isCompactEditorialGrid){
    grid.classList.add(isCompactEditorialGrid ? 'ind-grid--compact' : 'ind-grid--editorial');
    grid.innerHTML = list.map(ind => {
      const image = isCompactEditorialGrid ? HOME_INDUSTRY_IMAGES[ind.slug] : INDUSTRY_IMAGES[ind.slug];
      return `
        <a class="ind-story${isCompactEditorialGrid ? ' ind-story--compact' : ''}" href="industry-${ind.slug}.html" aria-label="Explore ${ind.name}">
          <span class="ind-story-media">
            <img src="${image.src}" alt="${image.alt}" loading="lazy" decoding="async" referrerpolicy="no-referrer" />
          </span>
          <span class="ind-story-content">
            <span class="ind-story-kicker">
              <span class="ind-story-icon" aria-hidden="true">${industryIconSvg(ind)}</span>
              <span class="ind-story-label">Sector model</span>
            </span>
            <span class="ind-story-title">${ind.name}</span>
            <span class="ind-story-summary">${ind.summary}</span>
            <span class="ind-story-action">
              <span>View industry</span>
              <span class="ind-story-arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </span>
          </span>
        </a>
      `;
    }).join('');
  } else if (isModalGrid){
    grid.innerHTML = list.map(ind => `
      <button class="ind" type="button" data-slug="${ind.slug}">
        <div class="ico">${industryIconSvg(ind)}</div>
        <div class="nm">${ind.name}</div>
        <span class="ind-cue">Explore this sector →</span>
      </button>
    `).join('');

    grid.querySelectorAll('.ind').forEach(btn => {
      btn.addEventListener('click', () => openIndustryModal(btn.getAttribute('data-slug')));
    });

    if (location.hash){
      const slug = location.hash.slice(1);
      if (INDUSTRIES.some(i => i.slug === slug)) openIndustryModal(slug);
    }
  } else {
    grid.innerHTML = list.map(ind => `
      <a class="ind" href="industry-${ind.slug}.html">
        <div class="ico">${industryIconSvg(ind)}</div>
        <div class="nm">${ind.name}</div>
      </a>
    `).join('');
  }
}

let modalEl = null;
function ensureModal(){
  if (modalEl) return modalEl;
  modalEl = document.createElement('div');
  modalEl.className = 'modal';
  modalEl.innerHTML = `
    <div class="modal-backdrop" data-close></div>
    <div class="modal-panel" role="dialog" aria-modal="true">
      <button class="modal-close" type="button" aria-label="Close" data-close>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
      <div class="modal-body"></div>
    </div>
  `;
  document.body.appendChild(modalEl);
  modalEl.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalEl.classList.contains('open')) closeModal();
  });
  return modalEl;
}

function openIndustryModal(slug){
  const ind = INDUSTRIES.find(i => i.slug === slug);
  if (!ind) return;
  const modal = ensureModal();

  const studyHtml = ind.study ? `
    <a class="study" href="${ind.study.href}">
      <span class="tag">${ind.study.tag}</span>
      <span class="st-title">${ind.study.title}</span>
      <span class="st-sum">${ind.study.sum}</span>
      <span class="read">Read the study <span class="arr">→</span></span>
    </a>
  ` : `
    <div class="study-empty">
      <p>No published study for this sector yet — ask us about ongoing work.</p>
      <a href="contact.html" class="btn btn-ghost">Talk to our team</a>
    </div>
  `;

  modal.querySelector('.modal-body').innerHTML = `
    <div class="modal-ico">${industryIconSvg(ind)}</div>
    <span class="eyebrow">Industry</span>
    <h2>${ind.name}</h2>
    <p class="modal-lead">${ind.summary}</p>
    <div class="modal-sub">How we model it</div>
    <ul class="modal-list">
      ${ind.points.map(p => `<li>${CHECK}${p}</li>`).join('')}
    </ul>
    <div class="modal-sub">Related study</div>
    ${studyHtml}
    <div class="btn-row" style="margin-top:24px">
      <a href="industry-${ind.slug}.html" class="btn btn-ghost" style="width:100%;justify-content:center">View full industry page <svg class="arr" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  if (!modalEl) return;
  modalEl.classList.remove('open');
  document.body.style.overflow = '';
}

/* ---------- Capability tabs ---------- */
function initTabs(){
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.panel');
  if (!tabBtns.length || !panels.length) return;

  const activate = (index) => {
    tabBtns.forEach(b => b.classList.toggle('active', Number(b.dataset.tab) === index));
    panels.forEach((p, i) => p.classList.toggle('show', i === index));
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => activate(Number(btn.dataset.tab)));
  });

  if (location.hash){
    const idx = Array.from(panels).findIndex(p => '#' + p.id === location.hash);
    if (idx > -1) activate(idx);
  }
}

/* ---------- Contact form ---------- */
function initContactForm(){
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      const empty = !field.value.trim();
      field.style.borderColor = empty ? '#dc2626' : '';
      if (empty) valid = false;
    });
    if (!valid) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    const ajaxUrl = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');

    try {
      const res = await fetch(ajaxUrl, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error('Request failed');

      const notice = document.createElement('div');
      notice.className = 'cta';
      notice.style.padding = '40px';
      notice.innerHTML = `
        <h2 style="font-size:26px">Thanks, that's sent.</h2>
        <p>We usually get back within two business days. If it's urgent, call +1 (425) 270-3552.</p>
      `;
      form.replaceWith(notice);
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
      let errNote = form.querySelector('.form-error');
      if (!errNote) {
        errNote = document.createElement('p');
        errNote.className = 'form-error';
        errNote.style.color = '#dc2626';
        errNote.style.fontSize = '13px';
        errNote.style.marginTop = '10px';
        form.appendChild(errNote);
      }
      errNote.textContent = "That didn't go through — please email sumathi@infisum.com directly instead.";
    }
  });
}

/* ---------- Spotlight tag filter ---------- */
function initSpotlightFilter(){
  const bar = document.querySelector('.filter-bar');
  if (!bar) return;

  const cards = document.querySelectorAll('.card-grid .card[data-tag]');
  const buttons = bar.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.tag === filter;
        card.classList.toggle('filtered-out', !show);
      });
    });
  });
}

/* ---------- Industry paper library ---------- */

function initPaperCardImages(){
  const cards = document.querySelectorAll('.paper-card[data-paper-title]');
  if (!cards.length) return;

  const pageName = location.pathname.split('/').pop() || '';
  const images = window.PAPER_CARD_IMAGES?.[pageName] || [];
  const usedImages = new Set();

  cards.forEach((card, index) => {
    const tag = card.querySelector('.tag');
    if (tag) tag.textContent = card.dataset.paperCategory || 'Research';

    const src = images[index];
    if (!src || usedImages.has(src)) return;
    usedImages.add(src);

    const media = document.createElement('span');
    media.className = 'paper-card-media';
    media.setAttribute('aria-hidden', 'true');

    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.loading = 'eager';
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer';
    img.addEventListener('error', () => media.remove());
    media.appendChild(img);

    const arrow = card.querySelector('.paper-arr');
    card.insertBefore(media, arrow || null);
  });
}

function simplifySummaryLanguage(value){
  return value
    .replace(/Links GTAP-E-Power and GTAP value-added models/gi, 'Uses linked models of electricity, production and supply chains')
    .replace(/GTAP-E-Power and GTAP value-added models/gi, 'linked models of electricity, production and supply chains')
    .replace(/GTAP 10a/gi, 'a global model of connected industries and countries')
    .replace(/GTAP 7/gi, 'a global model of connected industries and countries')
    .replace(/GTAP-BIO/gi, 'a global model linking agriculture, energy and land use')
    .replace(/GTAP CGE/gi, 'a global computer model that tracks how industries and countries affect one another')
    .replace(/\bGTAP\b/gi, 'a global economic model')
    .replace(/\bCGE\b/gi, 'economy-wide')
    .replace(/RCA, RTA, market-demand and export-potential indicators/gi, 'measures of export strength, demand and market opportunity')
    .replace(/revealed comparative advantage/gi, 'export strength')
    .replace(/export-intensity indicators/gi, 'measures of how strongly countries trade with each other')
    .replace(/\bAHP\b/g, 'a structured expert-ranking method')
    .replace(/cointegration/gi, 'long-run statistical relationships')
    .replace(/Granger causality/gi, 'tests of whether one change tends to happen before another')
    .replace(/elasticity-based/gi, 'customer-response')
    .replace(/elasticities/gi, 'ability to switch between fuels')
    .replace(/oligopolistic/gi, 'small-number-of-competitors')
    .replace(/equivalent variation/gi, 'estimated change in economic well-being');
}

function initPaperLibrary(){
  const cards = document.querySelectorAll('.paper-card[data-paper-title]');
  const detail = document.getElementById('paper-detail');
  if (!cards.length || !detail) return;

  const title = detail.querySelector('[data-paper-detail-title]');
  const category = detail.querySelector('[data-paper-detail-category]');
  detail.querySelector('[data-paper-detail-source]')?.remove();
  const actionNote = detail.querySelector('.paper-detail-actions p');
  const summaryHost = detail.querySelector('.paper-detail-copy');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const record = PAPER_LINK_INDEX[card.dataset.paperTitle] || {};
      const summary = PAPER_SUMMARIES[card.dataset.paperTitle];
      title.textContent = card.dataset.paperTitle;
      category.textContent = card.dataset.paperCategory || 'Research paper';
      summaryHost.replaceChildren();
      if (summary) {
        const bullets = [
          ['What it is about', summary.about],
          ['Who it is for', summary.audience],
          ['How they studied it', summary.method],
          ['What they found', summary.insights]
        ];
        bullets.forEach(([label, copy]) => {
          const item = document.createElement('span');
          item.className = 'paper-summary-item';
          const strong = document.createElement('strong');
          strong.textContent = `${label}: `;
          item.append(strong, document.createTextNode(simplifySummaryLanguage(copy)));
          summaryHost.appendChild(item);
        });
      } else {
        const unavailable = document.createElement('span');
        unavailable.className = 'paper-summary-unavailable';
        unavailable.textContent = 'A reliable source summary is not available for this record, so no details have been inferred.';
        summaryHost.appendChild(unavailable);
      }

      const currentPaperLink = detail.querySelector('[data-paper-detail-full]') || detail.querySelector('.paper-link-pending');
      const nextPaperLink = document.createElement(record.paperUrl ? 'a' : 'span');
      nextPaperLink.dataset.paperDetailFull = '';
      if (record.paperUrl) {
        nextPaperLink.href = record.paperUrl;
        nextPaperLink.className = 'btn btn-primary';
        nextPaperLink.textContent = 'Open paper';
        nextPaperLink.setAttribute('aria-label', `Open the publication for ${card.dataset.paperTitle}`);
        actionNote.textContent = 'A verified publication link is available below.';
      } else {
        nextPaperLink.className = 'paper-link-pending';
        nextPaperLink.textContent = 'Verified paper link not available';
        actionNote.textContent = 'No verified full-paper link is currently available.';
      }
      currentPaperLink.replaceWith(nextPaperLink);
      detail.classList.add('is-selected', 'in');
    });
  });
}

/* ---------- People directories ---------- */
function initPeopleDirectory(){
  const directory = document.querySelector('[data-people-directory]');
  if (!directory || !window.PEOPLE_DIRECTORIES) return;

  const people = window.PEOPLE_DIRECTORIES[directory.dataset.peopleDirectory] || [];
  const grid = directory.querySelector('[data-people-grid]');
  const search = directory.querySelector('[data-people-search]');
  const count = directory.querySelector('[data-people-count]');
  const empty = directory.querySelector('[data-people-empty]');

  const linkedinIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 5a2 2 0 11-4 0 2 2 0 014 0zM3 8.5h3.9V21H3V8.5zm6.5 0h3.7v1.7h.05c.52-.98 1.8-2 3.7-2 3.96 0 4.7 2.6 4.7 6V21h-3.9v-5.5c0-1.3 0-3-1.85-3s-2.13 1.44-2.13 2.9V21H9.5V8.5z"/></svg>';
  const usedPersonImages = new Set();

  people.forEach(person => {
    const card = document.createElement('article');
    card.className = 'person-card reveal';
    card.dataset.personSearch = `${person.name} ${person.role || ''}`.toLowerCase();

    const photo = document.createElement('div');
    photo.className = 'person-photo';
    const showInitials = () => {
      photo.classList.add('person-photo-fallback');
      photo.textContent = person.name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('');
    };
    const imageSrc = person.image?.trim();
    const hasUniquePhoto = imageSrc && !usedPersonImages.has(imageSrc) && !/demo-intern/i.test(imageSrc);
    if (hasUniquePhoto) {
      usedPersonImages.add(imageSrc);
      const img = document.createElement('img');
      img.alt = person.name;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.referrerPolicy = 'no-referrer';
      // A dead/unresponsive host (rather than a clean 404) can leave the browser hanging on the
      // connection well past any reasonable wait, so 'error' never fires in time. Force a fallback
      // after 4s regardless, but still swap in the real photo if it shows up after that.
      let fellBack = false;
      const giveUp = setTimeout(() => { fellBack = true; showInitials(); }, 4000);
      img.addEventListener('load', () => {
        clearTimeout(giveUp);
        if (fellBack) {
          photo.classList.remove('person-photo-fallback');
          photo.textContent = '';
          photo.appendChild(img);
        }
      });
      img.addEventListener('error', () => {
        clearTimeout(giveUp);
        if (!fellBack) { fellBack = true; showInitials(); }
      });
      photo.appendChild(img);
      img.src = imageSrc;
    } else {
      showInitials();
    }

    const copy = document.createElement('div');
    copy.className = 'person-copy';
    const name = document.createElement('h2');
    name.textContent = person.name;
    copy.appendChild(name);
    if (person.role) {
      const role = document.createElement('p');
      role.textContent = person.role;
      copy.appendChild(role);
    }

    const links = document.createElement('div');
    links.className = 'person-links';
    if (person.linkedin) {
      const linkedin = document.createElement('a');
      linkedin.href = person.linkedin;
      linkedin.className = 'person-link person-linkedin';
      linkedin.setAttribute('aria-label', `${person.name} on LinkedIn`);
      linkedin.innerHTML = `${linkedinIcon}<span>LinkedIn</span>`;
      links.appendChild(linkedin);
    }
    copy.appendChild(links);
    card.append(photo, copy);
    grid.appendChild(card);
  });

  const cards = [...grid.querySelectorAll('.person-card')];
  const applySearch = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const matches = !query || card.dataset.personSearch.includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = visible;
    empty.hidden = visible !== 0;
  };

  search.addEventListener('input', applySearch);
  applySearch();
  requestAnimationFrame(() => cards.forEach(card => card.classList.add('in')));
}
