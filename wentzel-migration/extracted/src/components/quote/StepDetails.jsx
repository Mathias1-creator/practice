import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const irrigationQuestions = {
  type: { label: 'New install or repair?', options: ['New Install', 'Repair', 'Not Sure'] },
  property: { label: 'Property type?', options: ['Residential', 'Commercial', 'School or Park'] },
  size: { label: 'Approximate yard size?', options: ['Under 2,000 sqft', '2,000–5,000 sqft', '5,000–10,000 sqft', 'Over 10,000 sqft'] },
  issue: { label: 'What is the issue?', options: ['Low pressure', 'Broken head', 'Valve problem', 'Timer issue', 'Leak', 'Full system', 'Not sure'] },
};

const drainageQuestions = {
  problem: { label: 'What is the problem?', options: ['Standing water', 'Erosion', 'Flooding', 'Runoff', 'Not sure'] },
  location: { label: 'Where is the issue?', options: ['Front yard', 'Back yard', 'Side yard', 'Full property'] },
  property: { label: 'Property type?', options: ['Residential', 'Commercial'] },
};

const lawnCareChecklist = ['Mowing', 'Aeration', 'Dethatching', 'Fertilizing', 'Overseeding', 'Sod', 'Weed control', 'Consulting'];

const lawnQuestions = {
  size: { label: 'Lawn size?', options: ['Under 2,000 sqft', '2,000–5,000 sqft', '5,000–10,000 sqft', 'Over 10,000 sqft'] },
  frequency: { label: 'How often?', options: ['One-time', 'Monthly', 'Weekly', 'Seasonal'] },
};

const sportsQuestions = {
  field_type: { label: 'Type of field?', options: ['Baseball', 'Soccer', 'Football', 'Multi-use', 'Park'] },
  needed: { label: 'What is needed?', options: ['Audit', 'Renovation', 'Leveling', 'Ongoing management', 'Full assessment'] },
  field_size: { label: 'Field size?', options: ['Small', 'Medium', 'Large', 'Multiple fields'] },
};

function QuestionSelect({ questionKey, question, details, onChange }) {
  return (
    <div>
      <Label className="text-sm font-medium text-gray-700 mb-1 block">{question.label}</Label>
      <Select value={details[questionKey] || ''} onValueChange={v => onChange(questionKey, v)}>
        <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
        <SelectContent>
          {question.options.map(opt => (
            <SelectItem key={opt} value={opt}>{opt}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default function StepDetails({ service, details, onChange }) {
  const handleMultiCheck = (item, checked) => {
    const current = details.lawn_services || [];
    const updated = checked ? [...current, item] : current.filter(s => s !== item);
    onChange('lawn_services', updated);
  };

  if (service === 'Irrigation') {
    return (
      <div>
        <h2 className="text-xl font-heading font-bold text-[#1A1A1A] mb-2">Irrigation Details</h2>
        <p className="text-gray-500 text-sm mb-6">Help us understand your irrigation needs.</p>
        <div className="space-y-4">
          {Object.entries(irrigationQuestions).map(([key, q]) => (
            <QuestionSelect key={key} questionKey={key} question={q} details={details} onChange={onChange} />
          ))}
        </div>
      </div>
    );
  }

  if (service === 'Drainage') {
    return (
      <div>
        <h2 className="text-xl font-heading font-bold text-[#1A1A1A] mb-2">Drainage Details</h2>
        <p className="text-gray-500 text-sm mb-6">Tell us about the drainage issue.</p>
        <div className="space-y-4">
          {Object.entries(drainageQuestions).map(([key, q]) => (
            <QuestionSelect key={key} questionKey={key} question={q} details={details} onChange={onChange} />
          ))}
        </div>
      </div>
    );
  }

  if (service === 'Lawn Care') {
    return (
      <div>
        <h2 className="text-xl font-heading font-bold text-[#1A1A1A] mb-2">Lawn Care Details</h2>
        <p className="text-gray-500 text-sm mb-6">What lawn services do you need?</p>
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-3 block">Services needed (select all that apply)</Label>
            <div className="grid grid-cols-2 gap-3">
              {lawnCareChecklist.map((item) => (
                <label key={item} className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={(details.lawn_services || []).includes(item)}
                    onCheckedChange={(checked) => handleMultiCheck(item, checked)}
                  />
                  <span className="text-sm text-gray-600">{item}</span>
                </label>
              ))}
            </div>
          </div>
          {Object.entries(lawnQuestions).map(([key, q]) => (
            <QuestionSelect key={key} questionKey={key} question={q} details={details} onChange={onChange} />
          ))}
        </div>
      </div>
    );
  }

  if (service === 'Sports Field Services') {
    return (
      <div>
        <h2 className="text-xl font-heading font-bold text-[#1A1A1A] mb-2">Sports Field Details</h2>
        <p className="text-gray-500 text-sm mb-6">Tell us about the field.</p>
        <div className="space-y-4">
          {Object.entries(sportsQuestions).map(([key, q]) => (
            <QuestionSelect key={key} questionKey={key} question={q} details={details} onChange={onChange} />
          ))}
        </div>
      </div>
    );
  }

  // Multiple Services
  return (
    <div>
      <h2 className="text-xl font-heading font-bold text-[#1A1A1A] mb-2">Tell Us More</h2>
      <p className="text-gray-500 text-sm mb-6">Please describe what services you need and we'll tailor a quote for you.</p>
      <div className="space-y-4">
        <QuestionSelect questionKey="property" question={{ label: 'Property type?', options: ['Residential', 'Commercial', 'School or Park'] }} details={details} onChange={onChange} />
        <QuestionSelect questionKey="size" question={{ label: 'Property size?', options: ['Under 2,000 sqft', '2,000–5,000 sqft', '5,000–10,000 sqft', 'Over 10,000 sqft'] }} details={details} onChange={onChange} />
      </div>
    </div>
  );
}