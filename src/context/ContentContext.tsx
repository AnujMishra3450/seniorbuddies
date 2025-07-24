import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SiteContent } from '../types';
import { defaultSiteContent } from '../data/siteContent';

interface ContentContextType {
  content: SiteContent;
  updateContent: (newContent: Partial<SiteContent>) => void;
  isAdmin: boolean;
  setIsAdmin: (admin: boolean) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [isAdmin, setIsAdmin] = useState(false);

  const updateContent = (newContent: Partial<SiteContent>) => {
    setContent(prev => ({ ...prev, ...newContent }));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, isAdmin, setIsAdmin }}>
      {children}
    </ContentContext.Provider>
  );
};