const { useState, useEffect } = React;

// Lucide icons as SVG components
const Search = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const Download = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const CheckCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const Circle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const AccountingFramework = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [notes, setNotes] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [showExportModal, setShowExportModal] = useState(false);

  useEffect(() => {
    const savedChecked = localStorage.getItem('frameworkChecked');
    const savedNotes = localStorage.getItem('frameworkNotes');
    const savedExpanded = localStorage.getItem('frameworkExpanded');
    
    if (savedChecked) setCheckedItems(JSON.parse(savedChecked));
    if (savedNotes) setNotes(JSON.parse(savedNotes));
    if (savedExpanded) setExpandedSections(JSON.parse(savedExpanded));
  }, []);

  useEffect(() => {
    localStorage.setItem('frameworkChecked', JSON.stringify(checkedItems));
    localStorage.setItem('frameworkNotes', JSON.stringify(notes));
    localStorage.setItem('frameworkExpanded', JSON.stringify(expandedSections));
  }, [checkedItems, notes, expandedSections]);

  const frameworkData = {
    "1. Department Foundation": {
      priority: "must",
      items: [
        "Define department mission statement",
        "Establish core objectives (accuracy, compliance, insights, scalability)",
        "Document all current accounting processes",
        "Identify who performs each function",
        "List all systems and tools in use",
        "Map out workflow and handoffs",
        "Identify immediate pain points",
        "Note compliance gaps or risks",
        "Assess technology adequacy",
        "Define clear roles and responsibilities",
        "Create organizational chart",
        "Establish reporting relationships"
      ]
    },
    "2. General Ledger Management": {
      priority: "must",
      items: [
        "Design chart of accounts structure with room for growth",
        "Establish account numbering system",
        "Create journal entry policy and procedures",
        "Establish account reconciliation requirements",
        "Define month-end and year-end close procedures",
        "Document fixed asset tracking procedures",
        "Establish accrual accounting procedures"
      ]
    },
    "3. Accounts Receivable": {
      priority: "must",
      items: [
        "Create customer onboarding process",
        "Establish credit approval procedures",
        "Design invoice templates and numbering system",
        "Define invoicing procedures and timing",
        "Establish payment terms policies",
        "Create collections policy and procedures",
        "Define aging analysis review process",
        "Establish bad debt policy and reserve calculation",
        "Define revenue recognition policies by revenue type"
      ]
    },
    "4. Accounts Payable": {
      priority: "must",
      items: [
        "Create vendor onboarding process (W-9 collection)",
        "Establish purchase approval requirements",
        "Define three-way matching procedures",
        "Create approval matrix by dollar amount",
        "Establish payment processing schedule",
        "Define payment methods (ACH, check, credit card)",
        "Create 1099 tracking and reporting procedures",
        "Establish expense accrual procedures"
      ]
    },
    "5. Cash Management": {
      priority: "must",
      items: [
        "Establish bank account structure",
        "Define authorized signers and limits",
        "Create bank reconciliation procedures",
        "Establish daily cash monitoring process",
        "Create 13-week cash flow forecast template",
        "Define wire transfer authorization procedures"
      ]
    },
    "6. Payroll Administration": {
      priority: "must",
      items: [
        "Define pay periods and pay dates",
        "Create annual payroll calendar",
        "Establish time tracking requirements",
        "Define payroll processing workflow",
        "Create new hire payroll setup procedures",
        "Establish payroll change procedures",
        "Define termination payroll procedures",
        "Create tax withholding and remittance procedures",
        "Establish multi-state compliance procedures",
        "Define year-end processing procedures (W-2, 1099)"
      ]
    },
    "7. Internal Controls": {
      priority: "must",
      items: [
        "Establish segregation of duties (where possible)",
        "Create approval matrices by transaction type",
        "Implement authorization controls",
        "Establish reconciliation procedures",
        "Create documentation requirements",
        "Implement physical security controls",
        "Establish IT access controls",
        "Implement compensating controls for small team",
        "Create fraud prevention procedures"
      ]
    },
    "8. Compliance Calendar": {
      priority: "must",
      items: [
        "Identify all federal tax obligations",
        "Identify all state tax obligations",
        "Identify all local tax obligations",
        "Identify Canadian tax obligations (if applicable)",
        "Create comprehensive tax calendar",
        "Set reminders 30, 14, 7, 2 days before deadlines",
        "Assign responsibility for each obligation",
        "Track completion status"
      ]
    },
    "9. Month-End Close Process": {
      priority: "should",
      items: [
        "Create month-end close calendar",
        "Establish close timeline (target: 7-10 days)",
        "Define day-by-day close activities",
        "Create comprehensive close checklist",
        "Establish review and approval procedures",
        "Define variance analysis thresholds"
      ]
    },
    "10. Financial Reporting": {
      priority: "should",
      items: [
        "Define reporting calendar (monthly, quarterly, annual)",
        "Create standard financial statement package",
        "Establish management reporting format",
        "Define KPI tracking and reporting",
        "Create budget vs. actual variance analysis procedures",
        "Establish dashboard reporting"
      ]
    },
    "11. Budgeting & Forecasting": {
      priority: "should",
      items: [
        "Create annual budget process and timeline",
        "Define budget methodology",
        "Establish budget templates",
        "Create forecast update procedures (quarterly)",
        "Define scenario planning approach",
        "Establish capital expenditure budgeting process"
      ]
    },
    "12. Policies & Procedures": {
      priority: "should",
      items: [
        "Write revenue recognition policy",
        "Write expense recognition policy",
        "Write cash management policy",
        "Write credit and collections policy",
        "Write purchasing and AP policy",
        "Write payroll policy",
        "Write fixed assets policy",
        "Write travel and entertainment policy",
        "Write document retention policy",
        "Create comprehensive procedures manual"
      ]
    },
    "13. Key Performance Indicators": {
      priority: "should",
      items: [
        "Calculate and track gross profit margin",
        "Calculate and track operating profit margin",
        "Calculate and track net profit margin",
        "Calculate and track current ratio",
        "Calculate and track days sales outstanding (DSO)",
        "Track days to close",
        "Track accounting error rate",
        "Create KPI dashboard",
        "Set targets for each KPI"
      ]
    },
    "14. Technology Stack": {
      priority: "should",
      items: [
        "Evaluate accounting software needs",
        "Define required integrations",
        "Establish data security measures",
        "Create backup and disaster recovery procedures",
        "Define user access management procedures",
        "Implement password manager",
        "Enable two-factor authentication everywhere"
      ]
    },
    "15. Cybersecurity": {
      priority: "must",
      items: [
        "Train staff on phishing recognition",
        "Require strong passwords (12+ characters)",
        "Enable MFA on all financial systems",
        "Keep all software updated and patched",
        "Establish daily automated backups",
        "Create incident response plan"
      ]
    },
    "16. Fixed Asset Management": {
      priority: "should",
      items: [
        "Define capitalization threshold",
        "Establish asset categories and useful lives",
        "Create asset acquisition procedures",
        "Establish asset tagging system",
        "Define depreciation calculation methods",
        "Create asset disposal procedures"
      ]
    },
    "17. Multi-Entity Considerations": {
      priority: "nice",
      items: [
        "Maintain separate books for each entity",
        "Establish separate bank accounts",
        "Use consistent chart of accounts across entities",
        "Create intercompany accounts",
        "Document all intercompany transactions",
        "Establish regular intercompany reconciliation"
      ]
    },
    "18. Remote Workforce": {
      priority: "should",
      items: [
        "Track employee locations",
        "Register in all states with employees",
        "Implement multi-state withholding",
        "Monitor nexus creation by remote employees",
        "Establish home office expense policies"
      ]
    },
    "19. Professional Development": {
      priority: "nice",
      items: [
        "Join professional organizations",
        "Subscribe to relevant publications",
        "Set annual learning goals",
        "Create professional development plan",
        "Budget for training and conferences"
      ]
    },
    "20. Process Improvement": {
      priority: "nice",
      items: [
        "Identify improvement opportunities",
        "Document current state",
        "Analyze root causes",
        "Design future state",
        "Implement changes",
        "Measure results",
        "Encourage staff suggestions"
      ]
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleItem = (section, item) => {
    const key = `${section}|||${item}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateNote = (section, item, note) => {
    const key = `${section}|||${item}`;
    setNotes(prev => ({
      ...prev,
      [key]: note
    }));
  };

  const getExportText = () => {
    const exportObject = {
      checkedItems,
      notes,
      exportDate: new Date().toISOString(),
      progress: calculateProgress()
    };
    
    return JSON.stringify(exportObject, null, 2);
  };

  const copyToClipboard = () => {
    const text = getExportText();
    navigator.clipboard.writeText(text).then(() => {
      alert('Progress data copied to clipboard! You can paste it into a text file.');
    });
  };

  const calculateProgress = () => {
    const totalItems = Object.values(frameworkData).reduce((acc, section) => acc + section.items.length, 0);
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    return {
      total: totalItems,
      completed: checkedCount,
      percentage: Math.round((checkedCount / totalItems) * 100)
    };
  };

  const calculateSectionProgress = (section) => {
    const items = frameworkData[section].items;
    const checkedCount = items.filter(item => checkedItems[`${section}|||${item}`]).length;
    return {
      completed: checkedCount,
      total: items.length,
      percentage: Math.round((checkedCount / items.length) * 100)
    };
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'must': return 'bg-red-100 text-red-800 border-red-300';
      case 'should': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'nice': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getPriorityLabel = (priority) => {
    switch(priority) {
      case 'must': return 'MUST DO';
      case 'should': return 'SHOULD DO';
      case 'nice': return 'NICE TO DO';
      default: return '';
    }
  };

  const filteredSections = Object.entries(frameworkData).filter(([section, data]) => {
    if (priorityFilter !== 'all' && data.priority !== priorityFilter) return false;
    
    if (searchTerm) {
      const sectionMatch = section.toLowerCase().includes(searchTerm.toLowerCase());
      const itemsMatch = data.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
      return sectionMatch || itemsMatch;
    }
    
    return true;
  });

  const progress = calculateProgress();

  return React.createElement('div', { className: "min-h-screen bg-gray-50 p-6" },
    React.createElement('div', { className: "max-w-6xl mx-auto" },
      // Header
      React.createElement('div', { className: "bg-white rounded-lg shadow-lg p-6 mb-6" },
        React.createElement('h1', { className: "text-3xl font-bold text-gray-900 mb-2" },
          "Accounting Department Framework"
        ),
        React.createElement('p', { className: "text-gray-600 mb-4" },
          "Your interactive roadmap for building and organizing your accounting department"
        ),
        React.createElement('div', { className: "bg-gray-200 rounded-full h-4 mb-2" },
          React.createElement('div', {
            className: "bg-blue-600 h-4 rounded-full transition-all duration-300",
            style: { width: `${progress.percentage}%` }
          })
        ),
        React.createElement('div', { className: "flex justify-between text-sm text-gray-600" },
          React.createElement('span', null, `${progress.completed} of ${progress.total} items completed`),
          React.createElement('span', null, `${progress.percentage}%`)
        )
      ),

      // Controls
      React.createElement('div', { className: "bg-white rounded-lg shadow-lg p-4 mb-6" },
        React.createElement('div', { className: "flex flex-col sm:flex-row gap-4" },
          // Search
          React.createElement('div', { className: "flex-1 relative" },
            React.createElement(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" }),
            React.createElement('input', {
              type: "text",
              placeholder: "Search framework...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            })
          ),

          // Priority filters
          React.createElement('div', { className: "flex gap-2" },
            React.createElement('button', {
              onClick: () => setPriorityFilter('all'),
              className: `px-4 py-2 rounded-lg font-medium transition ${
                priorityFilter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`
            }, "All"),
            React.createElement('button', {
              onClick: () => setPriorityFilter('must'),
              className: `px-4 py-2 rounded-lg font-medium transition ${
                priorityFilter === 'must' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`
            }, "Must Do"),
            React.createElement('button', {
              onClick: () => setPriorityFilter('should'),
              className: `px-4 py-2 rounded-lg font-medium transition ${
                priorityFilter === 'should' 
                  ? 'bg-yellow-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`
            }, "Should Do"),
            React.createElement('button', {
              onClick: () => setPriorityFilter('nice'),
              className: `px-4 py-2 rounded-lg font-medium transition ${
                priorityFilter === 'nice' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`
            }, "Nice to Do")
          ),

          // Export button
          React.createElement('button', {
            onClick: () => setShowExportModal(true),
            className: "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          },
            React.createElement(Download),
            "Export Progress"
          )
        )
      ),

      // Export Modal
      showExportModal && React.createElement('div', {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      },
        React.createElement('div', {
          className: "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col"
        },
          React.createElement('div', { className: "p-6 border-b border-gray-200" },
            React.createElement('h2', { className: "text-2xl font-bold text-gray-900" }, "Export Your Progress"),
            React.createElement('p', { className: "text-gray-600 mt-2" }, "Copy this data and save it to a text file")
          ),
          React.createElement('div', { className: "flex-1 overflow-auto p-6" },
            React.createElement('textarea', {
              readOnly: true,
              value: getExportText(),
              className: "w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm",
              onClick: (e) => e.target.select()
            })
          ),
          React.createElement('div', { className: "p-6 border-t border-gray-200 flex gap-3" },
            React.createElement('button', {
              onClick: copyToClipboard,
              className: "flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            }, "Copy to Clipboard"),
            React.createElement('button', {
              onClick: () => setShowExportModal(false),
              className: "px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            }, "Close")
          )
        )
      ),

      // Framework sections
      React.createElement('div', { className: "space-y-4" },
        filteredSections.map(([section, data]) => {
          const sectionProgress = calculateSectionProgress(section);
          const isExpanded = expandedSections[section];

          return React.createElement('div', {
            key: section,
            className: "bg-white rounded-lg shadow-lg overflow-hidden"
          },
            // Section header
            React.createElement('div', {
              onClick: () => toggleSection(section),
              className: "flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition"
            },
              React.createElement('div', { className: "flex items-center gap-3 flex-1" },
                isExpanded ? React.createElement(ChevronDown) : React.createElement(ChevronRight),
                React.createElement('h2', { className: "text-xl font-bold text-gray-900" }, section),
                React.createElement('span', {
                  className: `px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(data.priority)}`
                }, getPriorityLabel(data.priority))
              ),
              React.createElement('div', { className: "flex items-center gap-4" },
                React.createElement('div', { className: "text-right" },
                  React.createElement('div', { className: "text-sm font-semibold text-gray-700" },
                    `${sectionProgress.completed} / ${sectionProgress.total}`
                  ),
                  React.createElement('div', { className: "text-xs text-gray-500" },
                    `${sectionProgress.percentage}% complete`
                  )
                ),
                React.createElement('div', { className: "w-16 bg-gray-200 rounded-full h-2" },
                  React.createElement('div', {
                    className: "bg-blue-600 h-2 rounded-full transition-all duration-300",
                    style: { width: `${sectionProgress.percentage}%` }
                  })
                )
              )
            ),

            // Section items
            isExpanded && React.createElement('div', { className: "border-t border-gray-200 p-4" },
              data.items.map((item, idx) => {
                const itemKey = `${section}|||${item}`;
                const isChecked = checkedItems[itemKey];
                const itemNote = notes[itemKey] || '';

                return React.createElement('div', { key: idx, className: "mb-4 last:mb-0" },
                  React.createElement('div', { className: "flex items-start gap-3" },
                    React.createElement('button', {
                      onClick: () => toggleItem(section, item),
                      className: "mt-1 flex-shrink-0"
                    },
                      isChecked ? React.createElement(CheckCircle) : React.createElement(Circle)
                    ),
                    React.createElement('div', { className: "flex-1" },
                      React.createElement('div', {
                        className: `text-gray-800 ${isChecked ? 'line-through text-gray-500' : ''}`
                      }, item),
                      React.createElement('textarea', {
                        placeholder: "Add notes, dates, or comments...",
                        value: itemNote,
                        onChange: (e) => updateNote(section, item, e.target.value),
                        className: "w-full mt-2 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none",
                        rows: "2"
                      })
                    )
                  )
                );
              })
            )
          );
        })
      ),

      // No results message
      filteredSections.length === 0 && React.createElement('div', {
        className: "bg-white rounded-lg shadow-lg p-12 text-center"
      },
        React.createElement('p', { className: "text-gray-500 text-lg" }, "No items match your current filters"),
        React.createElement('button', {
          onClick: () => {
            setSearchTerm('');
            setPriorityFilter('all');
          },
          className: "mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        }, "Clear Filters")
      )
    )
  );
};

ReactDOM.render(
  React.createElement(AccountingFramework),
  document.getElementById('root')
);
