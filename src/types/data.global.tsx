import datasetMAGImgUrl from '../assets/4-framework-page/dataset-mag.png';
import datasetPatentImgUrl from '../assets/4-framework-page/dataset-patent.png';
import datasetCitationImgUrl from '../assets/4-framework-page/dataset-citation.png';
import datasetResearcherImgUrl from '../assets/4-framework-page/dataset-researcher.png';

import yifangImgUrl from '../assets/6-about/circle/yifang.png';
import yifanImgUrl from '../assets/6-about/circle/yifan.png';
import xiaoyuImgUrl from '../assets/6-about/circle/xiaoyu.png';
import nanImgUrl from '../assets/6-about/circle/nan.png';
import dashunImgUrl from '../assets/6-about/circle/dashun.png';

import kelloggImgUrl from '../assets/6-about/org/kellogg.png';
import cssiImgUrl from '../assets/6-about/org/cssi.png';
import tongjiImgUrl from '../assets/6-about/org/tongji.png';
import idvImgUrl from '../assets/6-about/org/idv.png';

// import yifangImgUrl from '../assets/6-about/yifang.jpg';
// import yifanImgUrl from '../assets/6-about/yifan.jpeg';
// import xiaoyuImgUrl from '../assets/6-about/xiaoyu.jpg';
// import nanImgUrl from '../assets/6-about/nan.jpeg';
// import dashunImgUrl from '../assets/6-about/dashun.jpeg';


export const textContent = {
  backgroudPage: {
    abstract: 'Science has long been viewed as a key driver for economic growth and rising standards of living. Knowledge about how scientific advances support marketplace inventions is therefore essential for understanding the role of science in propelling real-world applications and technological progress. The increasing availability of large-scale datasets tracing scientific publications and patented inventions and the complex interactions among them offers us new opportunities to explore the evolving dual frontiers of science and technology at an unprecedented level of scale and detail. Yet we lack suitable visual analytics approaches to effectively analyze such complex interactions. Here we introduce InnovationInsights, an interactive visual analysis system for researchers, research institutions, and policymakers to explore the complex linkages between science and technology, and identify critical innovations, inventors, and potential partners.',
    researchQuestion: {
      title: 'Research Questions',
      subtitle: 'Understanding and Decision-making',
      content: ['How to understand the dual frontiers of science and technology?', 'How to identify gaps and opportunities for innovation and facilitate more rapid and effective knowledge transfer?']
    },
    analysisGoal: {
      title: 'Analysis Goals',
      subtitle: 'Data-driven Interactive Visual Exploration',
      contentList: [
        { task: 'Researcher Identification', details: 'Who are potential inventors?' },
        { task: 'Interplay Exploration', details: 'How is scieince used by technology?' },
        { task: 'Invention Prediction', details: 'Where is the innovation potential?' },
      ]
    }
  },
  frameworkPage: {
    dataSource: [
      { dataset: 'Scientific Research', intro: 'We leverage the Microsoft Academic Graph (MAG) dataset to retrieve information about scientific research. The dataset consists of 270M research papers and their corresponding meta information, including the title, publication year, topic keywords, doi, author list, authors’ affiliations, and citations.', imgUrl: datasetMAGImgUrl },
      { dataset: 'Technical Invention', intro: 'We use the patent records collected in PatentsView to capture the technical inventions and reveal the development of technologies. This dataset contains over 7.9M patents filed through the United States Patent and Trademark Office (USPTO). Private data (e.g., invention disclosures and patents collected by research institutions) are also used.', imgUrl: datasetPatentImgUrl },
      { dataset: 'Science-Technology Linkage', intro: 'To analyze the interplay between scientific research and the development of technology, we choose to use data collected from “Reliance on Science”, which contains over 40M citation data that record the details about how technical innovations (i.e., patents) cite research papers.', imgUrl: datasetCitationImgUrl },
      { dataset: 'Researcher Profile', intro: 'This dataset provides the demographic information (e.g., gender, rank, and affiliation) of each individual researcher. The data are collected by research institutions (e.g., gender and rank) or automatically inferred by intelligent algorithms (e.g., gender). It also contains the publication records of each researcher collected from both public (e.g., MAG) and private sources (e.g., university libraries).', imgUrl: datasetResearcherImgUrl },
    ],
    gnnModel: 'The data analysis module calculates the contextual information that supports visual analysis and decision-making. In particular, two types of information are considerred: (1) the data facts about papers, patents,  and researchers calculated based on SciSci metrics; (2) the potentials of a paper to be transferred, which is estimated by a deep learning prediction model implemented by a graph convolutional network (GCN).',
    visualizationSystem: [
      'Our system comprises five components.',
      'The Researcher Overview and Statistics View are intended for individual-level analysis.',
      'The Innovation View shows the detailed interplay between science and technology.',
      'The Technology Inspection View and Science Inspection View enable users to explore additional contextual information within patents and papers.',
      'Users can start with loading specific datasets, such as data from a university or data from a paper field. Then they can obtain an overview of all researchers from the Researcher Overview and select a group of interest. In the Researcher Statistics View, they can access the semantic meaning of the selected researchers, including demographics and science of science metrics. They can also switch to individual researcher cards to get detailed information. Users can further narrow the interested researchers by clicking multiple categories in the bar charts or choosing a researcher card of interest. The interplay between science and technology of these selected researchers will be shown in the right three views.',

    ],
  },
  aboutPage: {
    authorList: [
      { author: 'Yifang Wang', affiliation: '[1, 2]', homepage: 'wangyifang.top', img: yifangImgUrl},
      { author: 'Yifan Qian', affiliation: '[1, 2]', homepage: 'https://yifanqian.com/', img: yifanImgUrl},
      { author: 'Xiaoyu Qi', affiliation: '[3, 4]', homepage: '#', img: xiaoyuImgUrl},
      { author: 'Nan Cao', affiliation: '[3, 4]', homepage: 'https://nancao.org/', img: nanImgUrl},
      { author: 'Dashun Wang', affiliation: '[1, 2]', homepage: 'https://www.dashunwang.com/', img: dashunImgUrl},
    ],
    orgList: [
      { img: kelloggImgUrl, },
      { img: cssiImgUrl, },
      { img: tongjiImgUrl, },
      { img: idvImgUrl, },
    ]
  }

}