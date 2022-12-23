import React from 'react';

import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Support from 'sections/support';
import PremiumFeature from 'sections/premium-feature';
import AppFeature from 'sections/app-feature';
import Dashboard from 'sections/dashboard';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Subscribe from 'sections/subscribe';
import Academy from 'sections/Academy';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="ExtramileAfrica"
          description="Extramile Africa is your hybrid cooperative plugin to access everyday products and services on credit."
        />
        <Banner />
        <Support />
        <PremiumFeature />
        <AppFeature />
        <Dashboard />
        <Academy />
        <Pricing />
        <Testimonials />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
