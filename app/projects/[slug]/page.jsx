const ProjectDetail = async ({ params }) => {
  const { slug } = await params;

  return <div>ProjectDetail {slug}</div>;
};

export default ProjectDetail;
