function AppFooter() {
  return (
    <footer className="shrink-0">
      <div className="container">
        <div className="py-4 text-center">
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;