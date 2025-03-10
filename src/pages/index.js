/********************************************************************************
 * Copyright (c) 2022 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0
 *
 * SPDX-License-Identifier: EPL-2.0
 ********************************************************************************/

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import HomePageHeader from "../components/HomePageHeader/index";
import AboutUsCard from "../components/AboutUsCard";
import FAQsComponent from "../components/FAQsComponent";
import KitsGalleryWithFilters from "../components/KitsGalleryWithFilters";
import { kitsGallery } from "@site/utils/kitsGallery";
import RoleBasedEnrtyComponent from "../components/RoleBasedEnrtyComponent";
import CommunityComponent from "../components/CommunityComponent";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomePageHeader />
      <main>
        {/* TODO - Enable when pages/content is available */}
        {/* <RoleBasedEnrtyComponent /> */}
        <AboutUsCard />
        <CommunityComponent />
        <KitsGalleryWithFilters 
          itemsArray={kitsGallery}
          title={"Our Kits"}
          description={"Unlock the power of kits. Browse the latest kits, their documentation, including tutorials,sample code, articles, and API reference."}
        />
        <FAQsComponent />
      </main>
    </Layout>
  );
}
