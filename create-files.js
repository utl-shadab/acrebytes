const fs = require('fs'); const files = ['CatalogueMaster.jsx','LuckyDraw.jsx','RedemptionApproval.jsx','IssueNumber.jsx','GenerateNumbers.jsx','QRCodeReturn.jsx','QRCodeDamage.jsx','WarrantyRegistration.jsx','WarrantyApproval.jsx','WarrantyEnquiry.jsx']; files.forEach(f => fs.writeFileSync('src/pages/'+f, '', { flag: 'w' }));
