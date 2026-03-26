export const SUPPORTED_LOCALES = ["en", "vi"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

const messages = {
  en: {
    nav: {
      home: "Home",
      invoices: "Invoices",
      customers: "Customers",
      signOut: "Sign Out",
    },
    dashboard: {
      title: "Dashboard",
      collected: "Collected",
      pending: "Pending",
      totalInvoices: "Total Invoices",
      totalCustomers: "Total Customers",
      recentRevenue: "Recent Revenue",
      latestInvoices: "Latest Invoices",
      updatedJustNow: "Updated just now",
      last12Months: "Last 12 months",
      noData: "No data available.",
    },
    invoices: {
      title: "Invoices",
      search: "Search invoices...",
      create: "Create Invoice",
      edit: "Edit Invoice",
      delete: "Delete",
      customer: "Customer",
      email: "Email",
      amount: "Amount",
      date: "Date",
      status: "Status",
      pending: "Pending",
      paid: "Paid",
      chooseCustomer: "Choose customer",
      selectCustomer: "Select a customer",
      chooseAmount: "Choose an amount",
      enterAmount: "Enter USD amount",
      setStatus: "Set the invoice status",
      cancel: "Cancel",
      createButton: "Create Invoice",
      editButton: "Edit Invoice",
    },
    customers: {
      title: "Customers",
      page: "Customers Page",
    },
    login: {
      title: "Please log in to continue.",
      email: "Email",
      emailPlaceholder: "Enter your email address",
      password: "Password",
      passwordPlaceholder: "Enter password",
      submit: "Log in",
    },
    errors: {
      somethingWentWrong: "Something went wrong!",
      tryAgain: "Try again",
      notFoundTitle: "404 Not Found",
      invoiceNotFound: "Could not find the requested invoice.",
      goBack: "Go Back",
      invalidCredentials: "Invalid credentials.",
      generic: "Something went wrong.",
      selectCustomer: "Please select a customer.",
      enterAmount: "Please enter an amount greater than $0.",
      selectStatus: "Please select an invoice status.",
      createFailed: "Missing Fields. Failed to Create Invoice.",
      createDbFailed: "Database Error: Failed to Create Invoice.",
      updateFailed: "Missing Fields. Failed to Update Invoice.",
      updateDbFailed: "Database Error: Failed to Update Invoice.",
    },
  },
  vi: {
    nav: {
      home: "Trang chủ",
      invoices: "Hóa đơn",
      customers: "Khách hàng",
      signOut: "Đăng xuất",
    },
    dashboard: {
      title: "Bảng điều khiển",
      collected: "Đã thu",
      pending: "Đang chờ",
      totalInvoices: "Tổng hóa đơn",
      totalCustomers: "Tổng khách hàng",
      recentRevenue: "Doanh thu gần đây",
      latestInvoices: "Hóa đơn mới nhất",
      updatedJustNow: "Vừa cập nhật",
      last12Months: "12 tháng gần nhất",
      noData: "Không có dữ liệu.",
    },
    invoices: {
      title: "Hóa đơn",
      search: "Tìm kiếm hóa đơn...",
      create: "Tạo hóa đơn",
      edit: "Chỉnh sửa hóa đơn",
      delete: "Xóa",
      customer: "Khách hàng",
      email: "Email",
      amount: "Số tiền",
      date: "Ngày",
      status: "Trạng thái",
      pending: "Chờ xử lý",
      paid: "Đã thanh toán",
      chooseCustomer: "Chọn khách hàng",
      selectCustomer: "Chọn một khách hàng",
      chooseAmount: "Chọn số tiền",
      enterAmount: "Nhập số tiền USD",
      setStatus: "Đặt trạng thái hóa đơn",
      cancel: "Hủy",
      createButton: "Tạo hóa đơn",
      editButton: "Chỉnh sửa hóa đơn",
    },
    customers: {
      title: "Khách hàng",
      page: "Trang khách hàng",
    },
    login: {
      title: "Vui lòng đăng nhập để tiếp tục.",
      email: "Email",
      emailPlaceholder: "Nhập địa chỉ email",
      password: "Mật khẩu",
      passwordPlaceholder: "Nhập mật khẩu",
      submit: "Đăng nhập",
    },
    errors: {
      somethingWentWrong: "Đã xảy ra lỗi!",
      tryAgain: "Thử lại",
      notFoundTitle: "404 Không tìm thấy",
      invoiceNotFound: "Không tìm thấy hóa đơn được yêu cầu.",
      goBack: "Quay lại",
      invalidCredentials: "Thông tin đăng nhập không hợp lệ.",
      generic: "Đã xảy ra lỗi.",
      selectCustomer: "Vui lòng chọn khách hàng.",
      enterAmount: "Vui lòng nhập số tiền lớn hơn $0.",
      selectStatus: "Vui lòng chọn trạng thái hóa đơn.",
      createFailed: "Thiếu thông tin. Không thể tạo hóa đơn.",
      createDbFailed: "Lỗi cơ sở dữ liệu: Không thể tạo hóa đơn.",
      updateFailed: "Thiếu thông tin. Không thể cập nhật hóa đơn.",
      updateDbFailed: "Lỗi cơ sở dữ liệu: Không thể cập nhật hóa đơn.",
    },
  },
} as const;

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0] ?? "";
  return isLocale(first) ? first : "en";
}

export function getMessages(locale: Locale) {
  return messages[locale];
}
