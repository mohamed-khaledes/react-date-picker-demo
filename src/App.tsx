import ReactDatePicker from '@mk01/react-date-picker'
import './App.css'
import { useState } from 'react'

export default function App() {
 const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [demoConfig, setDemoConfig] = useState({
    theme: 'gradient',
    size: 'md',
    variant: 'outlined',
    borderRadius: 'lg',
    shadow: 'lg',
    animation: 'scale',
    locale: 'en',
    format: 'D MMMM YYYY',
    defaultCalendar: 'hijri',
    showBothCalendars: false,
    syncCalendars: true,
    allowCalendarSwitch: true,
    highlightToday: true,
    highlightWeekends: true,
    showTodayButton: true,
    showClearButton: true,
    closeOnSelect: true
  })

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          color: '#ffffff'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 700,
            marginBottom: '12px',
            textShadow: '0 2px 20px rgba(0,0,0,0.2)'
          }}>
            🌙 React Date Picker
          </h1>
          <p style={{
            fontSize: '20px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Beautiful Hijri & Gregorian date picker with extensive customization
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {/* Date Picker Demo */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: '24px',
              color: '#1f2937'
            }}>
              Live Demo
            </h2>

            <ReactDatePicker
              value={selectedDate}
              onChange={(date, hijri, gregorian) => {
                setSelectedDate(date)
                console.log('Selected:', { date, hijri, gregorian })
              }}
              theme={demoConfig.theme as any}
              size={demoConfig.size as any}
              variant={demoConfig.variant as any}
              borderRadius={demoConfig.borderRadius as any}
              shadow={demoConfig.shadow as any}
              animation={demoConfig.animation as any}
              locale={demoConfig.locale as any}
              format={demoConfig.format as any}
              defaultCalendar={demoConfig.defaultCalendar as any}
              showBothCalendars={demoConfig.showBothCalendars}
              syncCalendars={demoConfig.syncCalendars}
              allowCalendarSwitch={demoConfig.allowCalendarSwitch}
              highlightToday={demoConfig.highlightToday}
              highlightWeekends={demoConfig.highlightWeekends}
              showTodayButton={demoConfig.showTodayButton}
              showClearButton={demoConfig.showClearButton}
              closeOnSelect={demoConfig.closeOnSelect}
              placeholder="Select a date..."
            />

            {selectedDate && (
              <div style={{
                marginTop: '24px',
                padding: '16px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                color: '#ffffff'
              }}>
                <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                  Selected Date:
                </div>
                <div style={{ fontSize: '13px', opacity: 0.9 }}>
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Configuration Panel */}
          <div style={{
            background: '#ffffff',
            color:'black',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            maxHeight: '600px',
            overflowY: 'auto'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: '24px',
              color: '#1f2937'
            }}>
              Customization
            </h2>
            <div style={{
              display:"grid",
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap:"10px"
            }}>
            <ConfigSection title="Theme">
              <Select
                value={demoConfig.theme}
                onChange={(v) => setDemoConfig({ ...demoConfig, theme: v })}
                options={['light', 'dark', 'gradient', 'modern', 'minimal']}
              />
            </ConfigSection>

            <ConfigSection title="Size">
              <Select
                value={demoConfig.size}
                onChange={(v) => setDemoConfig({ ...demoConfig, size: v })}
                options={['sm', 'md', 'lg']}
              />
            </ConfigSection>

            <ConfigSection title="Variant">
              <Select
                value={demoConfig.variant}
                onChange={(v) => setDemoConfig({ ...demoConfig, variant: v })}
                options={['default', 'outlined', 'filled', 'borderless']}
              />
            </ConfigSection>

            <ConfigSection title="Border Radius">
              <Select
                value={demoConfig.borderRadius}
                onChange={(v) => setDemoConfig({ ...demoConfig, borderRadius: v })}
                options={['none', 'sm', 'md', 'lg', 'xl', 'full']}
              />
            </ConfigSection>

            <ConfigSection title="Shadow">
              <Select
                value={demoConfig.shadow}
                onChange={(v) => setDemoConfig({ ...demoConfig, shadow: v })}
                options={['none', 'sm', 'md', 'lg', 'xl']}
              />
            </ConfigSection>

            <ConfigSection title="Animation">
              <Select
                value={demoConfig.animation}
                onChange={(v) => setDemoConfig({ ...demoConfig, animation: v })}
                options={['none', 'fade', 'slide', 'scale', 'bounce']}
              />
            </ConfigSection>

            <ConfigSection title="Locale">
              <Select
                value={demoConfig.locale}
                onChange={(v) => setDemoConfig({ ...demoConfig, locale: v })}
                options={['en', 'ar']}
              />
            </ConfigSection>

            <ConfigSection title="Date Format">
              <Select
                value={demoConfig.format}
                onChange={(v) => setDemoConfig({ ...demoConfig, format: v })}
                options={[
                  'DD/MM/YYYY',
                  'MM/DD/YYYY',
                  'YYYY-MM-DD',
                  'DD-MM-YYYY',
                  'D MMMM YYYY',
                  'MMMM D, YYYY',
                  'D MMM YYYY',
                  'MMM D, YYYY',
                  'dddd, D MMMM YYYY',
                  'ddd, D MMM YYYY',
                  'DD.MM.YYYY',
                  'D/M/YYYY',
                  'YYYY/MM/DD'
                ]}
              />
            </ConfigSection>

            <ConfigSection title="Default Calendar">
              <Select
                value={demoConfig.defaultCalendar}
                onChange={(v) => setDemoConfig({ ...demoConfig, defaultCalendar: v })}
                options={['hijri', 'gregorian']}
              />
            </ConfigSection>
            </div>
            <ConfigSection title="Options">
              <Checkbox
                label="Show Both Calendars"
                checked={demoConfig.showBothCalendars}
                onChange={(v) => setDemoConfig({ ...demoConfig, showBothCalendars: v })}
              />
              <Checkbox
                label="Sync Calendars"
                checked={demoConfig.syncCalendars}
                onChange={(v) => setDemoConfig({ ...demoConfig, syncCalendars: v })}
              />
              <Checkbox
                label="Allow Calendar Switch"
                checked={demoConfig.allowCalendarSwitch}
                onChange={(v) => setDemoConfig({ ...demoConfig, allowCalendarSwitch: v })}
              />
              <Checkbox
                label="Highlight Today"
                checked={demoConfig.highlightToday}
                onChange={(v) => setDemoConfig({ ...demoConfig, highlightToday: v })}
              />
              <Checkbox
                label="Highlight Weekends"
                checked={demoConfig.highlightWeekends}
                onChange={(v) => setDemoConfig({ ...demoConfig, highlightWeekends: v })}
              />
              <Checkbox
                label="Show Today Button"
                checked={demoConfig.showTodayButton}
                onChange={(v) => setDemoConfig({ ...demoConfig, showTodayButton: v })}
              />
              <Checkbox
                label="Show Clear Button"
                checked={demoConfig.showClearButton}
                onChange={(v) => setDemoConfig({ ...demoConfig, showClearButton: v })}
              />
              <Checkbox
                label="Close on Select"
                checked={demoConfig.closeOnSelect}
                onChange={(v) => setDemoConfig({ ...demoConfig, closeOnSelect: v })}
              />
            </ConfigSection>
          </div>
        </div>
        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
          gap: '20px'
        }}>
          <FeatureCard
            icon="🌙"
            title="Dual Calendar"
            description="Seamlessly switch between Hijri and Gregorian calendars"
          />
          <FeatureCard
            icon="🎨"
            title="Highly Customizable"
            description="5 themes, 3 sizes, multiple variants, and custom colors"
          />
          <FeatureCard
            icon="🌍"
            title="Multi-language"
            description="Full support for English and Arabic locales"
          />
          <FeatureCard
            icon="⚡"
            title="Smooth Animations"
            description="Choose from fade, slide, scale, or bounce effects"
          />
          <FeatureCard
            icon="📱"
            title="Responsive"
            description="Works beautifully on all screen sizes"
          />
          <FeatureCard
            icon="🎯"
            title="Feature Rich"
            description="Min/max dates, highlighting, sync modes, and more"
          />
        </div>
      </div>
    </div>
  )
}

function ConfigSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{
        fontSize: '14px',
        fontWeight: 600,
        marginBottom: '8px',
        color: '#374151'
      }}>
        {title}
      </div>
      {children}
    </div>
  )
}

function Select({ value, onChange, options }: { 
  value: string; 
  onChange: (value: string) => void; 
  options: string[] 
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '100%',
        padding: '8px 12px',
        fontSize: '14px',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        background: '#ffffff',
        color:'black',
        cursor: 'pointer',
        outline: 'none'
      }}
    >
      {options.map(opt => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )
}

function Checkbox({ label, checked, onChange }: { 
  label: string; 
  checked: boolean; 
  onChange: (value: boolean) => void 
}) {
  return (
    <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      color: '#4b5563'
    }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{
          width: '16px',
          height: '16px',
          cursor: 'pointer'
        }}
      />
      {label}
    </label>
  )
}

function FeatureCard({ icon, title, description }: { 
  icon: string; 
  title: string; 
  description: string 
}) {
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'default'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)'
      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.25)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'
    }}>
      <div style={{ fontSize: '36px', marginBottom: '12px' }}>{icon}</div>
      <h3 style={{
        fontSize: '18px',
        fontWeight: 600,
        marginBottom: '8px',
        color: '#1f2937'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '14px',
        color: '#6b7280',
        lineHeight: '1.5'
      }}>
        {description}
      </p>
    </div>
  )
}