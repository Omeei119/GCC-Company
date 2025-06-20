import React from 'react';
import { Building, Users, Calendar, DollarSign, FileText, Globe } from 'lucide-react';

const CompanyInfo = () => {
  // Company information data matching the screenshot
  const companyData = [
    {
      icon: <Building className="w-6 h-6 text-blue-600" />,
      label: "Nature of Business",
      value: "Manufacturer"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      label: "Total Number of Employees",
      value: "4 People"
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      label: "GST Registration Date",
      value: "19-05-2025"
    },
    {
      icon: <FileText className="w-6 h-6 text-red-600" />,
      label: "Legal Status of Firm",
      value: "Limited Company"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-600" />,
      label: "Annual Turnover",
      value: "0"
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      label: "Import Export Code (IEC)",
      value: "AAHCE*****"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Company Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {companyData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">{item.label}</h3>
                  <p className="text-lg font-semibold text-gray-900">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional fields for GST No. and CIN No. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500 mb-1">GST No.</h3>
                <p className="text-lg font-semibold text-gray-900">-</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Building className="w-6 h-6 text-teal-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500 mb-1">CIN No.</h3>
                <p className="text-lg font-semibold text-gray-900">-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;