var approvedDocuments = {
    "A": {
        title: "Structure",
        requirements: [
            "A1 - Loading: All loads acting on the building must be safely transmitted to the ground",
            "A2 - Ground movement: Precautions must be taken to prevent damage from ground movement",
            "A3 - Disproportionate collapse: Buildings must be designed to avoid progressive collapse"
        ]
    },
    "B": {
        title: "Fire Safety", 
        requirements: [
            "B1 - Means of warning and escape: Adequate means of escape must be provided",
            "B2 - Internal fire spread (linings): Wall and ceiling linings must resist fire spread",
            "B3 - Internal fire spread (structure): Structure must maintain stability during fire",
            "B4 - External fire spread: External walls must resist fire spread to adjoining buildings",
            "B5 - Access and facilities for fire service: Adequate access for fire brigade"
        ]
    },
    "C": {
        title: "Site Preparation and Resistance to Contaminants",
        requirements: [
            "C1 - Preparation of site and resistance to contaminants: Site must be prepared properly",
            "C2 - Dangerous and offensive substances: Protection from methane and other gases"
        ]
    },
    "D": {
        title: "Toxic Substances",
        requirements: [
            "D1 - Cavity insulation: Insulation materials must not give off toxic gases"
        ]
    },
    "E": {
        title: "Resistance to the Passage of Sound",
        requirements: [
            "E1 - Protection against sound within dwelling-houses: Adequate sound insulation between rooms",
            "E2 - Protection against sound from other parts of building: Sound insulation between dwellings",
            "E3 - Reverberation in common areas: Control of reverberation in common spaces",
            "E4 - Acoustic conditions in schools: Specific acoustic requirements for educational buildings"
        ]
    },
    "F": {
        title: "Ventilation",
        requirements: [
            "F1 - Means of ventilation: Adequate ventilation must be provided to all spaces",
            "F2 - Condensation in roofs: Measures to prevent condensation in roof spaces"
        ]
    },
    "G": {
        title: "Sanitation, Hot Water Safety and Water Efficiency",
        requirements: [
            "G1 - Cold water supply: Adequate supply of wholesome water",
            "G2 - Water efficiency: Water consumption must not exceed specified limits",
            "G3 - Hot water supply and systems: Safe hot water systems",
            "G4 - Sanitary conveniences: Adequate sanitary facilities",
            "G5 - Bathrooms: Adequate bathing facilities"
        ]
    },
    "H": {
        title: "Drainage and Waste Disposal",
        requirements: [
            "H1 - Foul water drainage: Adequate drainage of foul water",
            "H2 - Wastewater treatment systems: On-site treatment systems",
            "H3 - Rainwater drainage: Adequate surface water drainage",
            "H4 - Building over sewers: Requirements for building over existing sewers",
            "H5 - Separate systems of drainage: Separate foul and surface water systems",
            "H6 - Solid waste storage: Adequate facilities for waste storage"
        ]
    },
    "J": {
        title: "Combustion Appliances and Fuel Storage Systems",
        requirements: [
            "J1 - Air supply: Adequate air supply for combustion appliances",
            "J2 - Discharge of products of combustion: Safe removal of combustion products",
            "J3 - Protection of building: Protection from heat and fire from appliances",
            "J4 - Provision of information: Information about appliance installation and maintenance"
        ]
    },
    "K": {
        title: "Protection from Falling, Collision and Impact",
        requirements: [
            "K1 - Stairs, ladders and ramps: Safe design of stairs and ramps",
            "K2 - Protection from falling: Barriers and guarding to prevent falls",
            "K3 - Vehicle barriers and loading bays: Protection from vehicle impact",
            "K4 - Protection against impact with glazing: Safe glazing in critical locations"
        ]
    },
    "L": {
        title: "Conservation of Fuel and Power",
        requirements: [
            "L1 - Conservation of fuel and power in dwellings: Energy efficiency in new dwellings",
            "L2 - Conservation of fuel and power in buildings other than dwellings: Energy efficiency in non-domestic buildings"
        ]
    },
    "M": {
        title: "Access to and Use of Buildings",
        requirements: [
            "M1 - Access and use: Buildings must be accessible to disabled people",
            "M2 - Access to extensions to buildings other than dwellings: Accessibility of extensions",
            "M3 - Sanitary conveniences: Accessible toilet facilities",
            "M4 - Accessible and adaptable dwellings: Categories of accessible housing"
        ]
    },
    "N": {
        title: "Glazing",
        requirements: [
            "N1 - Protection against impact: Safe glazing materials and locations",
            "N2 - Manifestation of glazing: Making glazing visible to prevent collisions"
        ]
    },
    "P": {
        title: "Electrical Safety",
        requirements: [
            "P1 - Design, installation, inspection and testing: Safe electrical installations"
        ]
    },
    "Q": {
        title: "Security in Dwellings",
        requirements: [
            "Q1 - Unauthorised access: Doors and windows must resist unauthorised access",
            "Q2 - Glazing: Security glazing requirements for doors and windows"
        ]
    },
    "R": {
        title: "Infrastructure for Electronic Communications",
        requirements: [
            "R1 - In-building physical infrastructure: Adequate infrastructure for electronic communications"
        ]
    },
    "S": {
        title: "Infrastructure for Charging Electric Vehicles",
        requirements: [
            "S1 - Electric vehicle charge points: Provision of charging infrastructure for electric vehicles"
        ]
    },
    "T": {
        title: "Toilet Accommodation",
        requirements: [
            "T1 - Toilet accommodation in non-domestic buildings: Adequate toilet facilities in commercial buildings"
        ]
    },
    "7": {
        title: "Material and Workmanship",
        requirements: [
            "7.1 - Materials and workmanship: All materials and workmanship must be of adequate quality",
            "7.2 - Short-lived materials: Materials with limited lifespan must be accessible for maintenance"
        ]
    }
};

var complianceData = {};

function init() {
    generateApprovedDocsHTML();
    loadData();
    updateSummary();
}

function generateApprovedDocsHTML() {
    var html = '';
    for (var docKey in approvedDocuments) {
        var doc = approvedDocuments[docKey];
        html += '<div class="approved-doc">';
        html += '<div class="doc-header" onclick="toggleDoc(\'' + docKey + '\')">Approved Document ' + docKey + ' - ' + doc.title + '</div>';
        html += '<div class="doc-content" id="doc-' + docKey + '">';
        
        for (var i = 0; i < doc.requirements.length; i++) {
            var reqId = docKey + '-' + i;
            html += '<div class="requirement" id="req-' + reqId + '">';
            html += '<div class="requirement-text">' + doc.requirements[i] + '</div>';
            html += '<div class="compliance-area">';
            html += '<select class="compliance-select" id="status-' + reqId + '" onchange="updateCompliance(\'' + reqId + '\')">';
            html += '<option value="">Select Status</option>';
            html += '<option value="compliant">Compliant</option>';
            html += '<option value="not-compliant">Not Compliant</option>';
            html += '<option value="not-applicable">Not Applicable</option>';
            html += '</select>';
            html += '<br><strong>Designer Comments:</strong>';
            html += '<textarea class="compliance-text" id="comments-' + reqId + '" placeholder="Explain how you have addressed this requirement, reference drawings, specifications, calculations etc." onchange="updateCompliance(\'' + reqId + '\')"></textarea>';
            html += '</div></div>';
        }
        
        html += '</div></div>';
    }
    document.getElementById('approvedDocs').innerHTML = html;
}

function toggleDoc(docKey) {
    var content = document.getElementById('doc-' + docKey);
    if (content.classList.contains('open')) {
        content.classList.remove('open');
    } else {
        content.classList.add('open');
    }
}

function updateCompliance(reqId) {
    var status = document.getElementById('status-' + reqId).value;
    var comments = document.getElementById('comments-' + reqId).value;
    var requirement = document.getElementById('req-' + reqId);
    
    // Update visual styling
    requirement.className = 'requirement';
    if (status) {
        requirement.classList.add(status);
    }
    
    // Save data
    complianceData[reqId] = {
        status: status,
        comments: comments
    };
    
    saveData();
    updateSummary();
}

function updateSummary() {
    var total = 0;
    var compliant = 0;
    var notCompliant = 0;
    var notApplicable = 0;
    
    for (var docKey in approvedDocuments) {
        var doc = approvedDocuments[docKey];
        for (var i = 0; i < doc.requirements.length; i++) {
            var reqId = docKey + '-' + i;
            total++;
            
            if (complianceData[reqId]) {
                var status = complianceData[reqId].status;
                if (status === 'compliant') compliant++;
                else if (status === 'not-compliant') notCompliant++;
                else if (status === 'not-applicable') notApplicable++;
            }
        }
    }
    
    var completed = compliant + notCompliant + notApplicable;
    var percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    document.getElementById('summaryText').innerHTML = 
        'Progress: ' + completed + '/' + total + ' (' + percentage + '%) | ' +
        'Compliant: ' + compliant + ' | Not Compliant: ' + notCompliant + ' | Not Applicable: ' + notApplicable;
}

function searchRequirements() {
    var searchTerm = document.getElementById('searchBox').value.toLowerCase();
    var requirements = document.querySelectorAll('.requirement');
    
    for (var i = 0; i < requirements.length; i++) {
        var requirement = requirements[i];
        var text = requirement.textContent.toLowerCase();
        
        if (text.includes(searchTerm) || searchTerm === '') {
            requirement.style.display = 'block';
        } else {
            requirement.style.display = 'none';
        }
    }
}

function saveProject() {
    var projectData = {
        name: document.getElementById('projectName').value,
        ref: document.getElementById('projectRef').value,
        designer: document.getElementById('designerName').value
    };
    
    sessionStorage.setItem('projectData', JSON.stringify(projectData));
    alert('Project details saved!');
}

function saveData() {
    sessionStorage.setItem('complianceData', JSON.stringify(complianceData));
}

function loadData() {
    // Load project data
    var projectData = sessionStorage.getItem('projectData');
    if (projectData) {
        projectData = JSON.parse(projectData);
        document.getElementById('projectName').value = projectData.name || '';
        document.getElementById('projectRef').value = projectData.ref || '';
        document.getElementById('designerName').value = projectData.designer || '';
    }
    
    // Load compliance data
    var savedData = sessionStorage.getItem('complianceData');
    if (savedData) {
        complianceData = JSON.parse(savedData);
        
        // Restore form states
        for (var reqId in complianceData) {
            var data = complianceData[reqId];
            var statusSelect = document.getElementById('status-' + reqId);
            var commentsTextarea = document.getElementById('comments-' + reqId);
            var requirement = document.getElementById('req-' + reqId);
            
            if (statusSelect) statusSelect.value = data.status || '';
            if (commentsTextarea) commentsTextarea.value = data.comments || '';
            if (requirement && data.status) {
                requirement.className = 'requirement ' + data.status;
            }
        }
    }
}

// Export data to downloadable file
function exportProjectData() {
    try {
        var allData = {
            projectData: JSON.parse(sessionStorage.getItem('projectData') || '{}'),
            complianceData: JSON.parse(sessionStorage.getItem('complianceData') || '{}'),
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
        
        var dataStr = JSON.stringify(allData, null, 2);
        var dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        var link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        
        var projectName = allData.projectData.name || 'BuildingRegs';
        var fileName = projectName.replace(/[^a-z0-9]/gi, '_') + '_' + new Date().toISOString().split('T')[0] + '.json';
        link.download = fileName;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        alert('Project data exported successfully!');
        
    } catch (error) {
        console.error('Export error:', error);
        alert('Error exporting data: ' + error.message);
    }
}

// Import data from file
function importProjectData() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                try {
                    var data = JSON.parse(e.target.result);
                    
                    if (data.projectData && data.complianceData) {
                        sessionStorage.setItem('projectData', JSON.stringify(data.projectData));
                        sessionStorage.setItem('complianceData', JSON.stringify(data.complianceData));
                        
                        alert('Project data imported successfully! Reloading page...');
                        location.reload();
                    } else {
                        alert('Invalid file format. Please select a valid project export file.');
                    }
                } catch (error) {
                    alert('Error reading file: ' + error.message);
                }
            };
            reader.readAsText(file);
        }
    };
    
    input.click();
}

function generateReport() {
    var projectData = JSON.parse(sessionStorage.getItem('projectData') || '{}');
    
    var html = '<!DOCTYPE html><html><head><title>Building Regulations Compliance Report</title>';
    html += '<style>body{font-family:Arial;margin:40px;line-height:1.6}';
    html += 'h1{color:#1f4e79;border-bottom:3px solid #1f4e79;padding-bottom:10px}';
    html += 'h2{color:#2d5a87;margin-top:30px}h3{color:#333}';
    html += '.compliant{background:#d4edda;padding:10px;border-left:4px solid #28a745}';
    html += '.not-compliant{background:#f8d7da;padding:10px;border-left:4px solid #dc3545}';
    html += '.not-applicable{background:#e2e3e5;padding:10px;border-left:4px solid #6c757d}';
    html += '.requirement{margin:15px 0;padding:10px;border:1px solid #ddd}';
    html += '</style></head><body>';
    
    html += '<h1>Building Regulations Compliance Report</h1>';
    html += '<p><strong>Project:</strong> ' + (projectData.name || 'N/A') + '</p>';
    html += '<p><strong>Reference:</strong> ' + (projectData.ref || 'N/A') + '</p>';
    html += '<p><strong>Designer:</strong> ' + (projectData.designer || 'N/A') + '</p>';
    html += '<p><strong>Date:</strong> ' + new Date().toLocaleDateString() + '</p>';
    
    for (var docKey in approvedDocuments) {
        var doc = approvedDocuments[docKey];
        html += '<h2>Approved Document ' + docKey + ' - ' + doc.title + '</h2>';
        
        for (var i = 0; i < doc.requirements.length; i++) {
            var reqId = docKey + '-' + i;
            var data = complianceData[reqId];
            
            html += '<div class="requirement">';
            html += '<h3>' + doc.requirements[i] + '</h3>';
            
            if (data) {
                var statusClass = data.status || '';
                html += '<div class="' + statusClass + '">';
                html += '<strong>Status:</strong> ' + (data.status || 'Not assessed') + '<br>';
                html += '<strong>Designer Comments:</strong><br>' + (data.comments || 'No comments provided');
                html += '</div>';
            } else {
                html += '<p><em>Not assessed</em></p>';
            }
            
            html += '</div>';
        }
    }
    
    html += '</body></html>';
    
    var printWindow = window.open('', '_blank');
    if (printWindow) {
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.print();
    }
}

// Initialize when page loads
window.onload = init;