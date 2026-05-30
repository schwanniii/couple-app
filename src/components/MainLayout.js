'use client';
import { useApp } from '@/context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

// Hier importieren wir deine Tabs jetzt sicher auf der Client-Seite
import HomeTab from '@/tabs/_1Home';
import DiscoverTab from '@/tabs/_2Discover';
import EventsTab from '@/tabs/_3Events';
import NotificationsTab from '@/tabs/_4Notifications';
import SettingsTab from '@/tabs/_5Settings';

const PAGES = [
  { id: 0, label: '🏠', color: '#dde8b9' },
  { id: 1, label: '🔎', color: '#e8d2ae' },
  { id: 2, label: '📅', color: '#d7b29d' },
  { id: 3, label: '🔔', color: '#F4B8BB' },
  { id: 4, label: '⚙️', color: '#C8AEB1' },
];

export default function MainLayout() {
  const { activeTab, setActiveTab, direction, setDirection } = useApp();

  const handleTabClick = (targetTabId) => {
    if (targetTabId > activeTab) {
      setDirection('next');
    } else if (targetTabId < activeTab) {
      setDirection('prev');
    }
    setActiveTab(targetTabId);
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 30;

    if (info.offset.x < -swipeThreshold && activeTab < PAGES.length - 1) {
      setDirection('next');
      setActiveTab(activeTab + 1);
    } else if (info.offset.x > swipeThreshold && activeTab > 0) {
      setDirection('prev');
      setActiveTab(activeTab - 1);
    }
  };

  // Hilfsfunktion, die genau den richtigen Tab zurückgibt
  const renderTabContent = (id) => {
    switch (id) {
      case 0: return <HomeTab />;
      case 1: return <DiscoverTab />;
      case 2: return <EventsTab />;
      case 3: return <NotificationsTab />;
      case 4: return <SettingsTab />;
      default: return <p>Seite nicht gefunden.</p>;
    }
  };

  const animVariants = {
    initial: (dir) => ({
      opacity: 0,
      x: dir === 'next' ? '100%' : '-100%',
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir === 'next' ? '-100%' : '100%',
    }),
  };

  return (
    <div style={styles.appContainer}>
      <div style={{ ...styles.viewport, backgroundColor: PAGES[activeTab].color }}>
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={activeTab}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            custom={direction}
            variants={animVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            style={styles.pageWrapper}
          >
            {/* Hier wird die Funktion direkt mit der ID aufgerufen */}
            {renderTabContent(activeTab)}
          </motion.div>
        </AnimatePresence>
      </div>

      <nav style={styles.bottomNav}>
        {PAGES.map((page) => (
          <button
            key={page.id}
            onClick={() => handleTabClick(page.id)}
            style={{
              ...styles.navButton,
              borderBottom: activeTab === page.id ? `3px solid ${page.color}` : '3px solid transparent',
              opacity: activeTab === page.id ? 1 : 0.4,
              transform: activeTab === page.id ? 'scale(1.15)' : 'scale(1)',
            }}
          >
            {page.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

const styles = {
  appContainer: { display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', fontFamily: 'sans-serif' },
  viewport: { flex: 1, overflow: 'hidden', position: 'relative', width: '100%', transition: 'background-color 0.2s ease' },
  pageWrapper: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', touchAction: 'pan-y', position: 'absolute', top: 0, left: 0 },
  bottomNav: { height: '60px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-around', backgroundColor: '#fff', zIndex: 10, paddingBottom: 'env(safe-area-inset-bottom)' },
  navButton: { background: 'none', border: 'none', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '24px', transition: 'all 0.2s', padding: '10px 0' }
};