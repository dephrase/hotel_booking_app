package com.codeclan.example.hotelBooking;

import com.codeclan.example.hotelBooking.models.Booking;
import com.codeclan.example.hotelBooking.models.Customer;
import com.codeclan.example.hotelBooking.repositories.BookingRepository;
import com.codeclan.example.hotelBooking.repositories.CustomerRepository;
import org.junit.Before;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static java.sql.Date.valueOf;
import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
class HotelBookingApplicationTests {

	@Autowired
	BookingRepository bookingRepository;

	@Autowired
	CustomerRepository customerRepository;

	public static java.util.Date parseDate(String date) {
		try {
			return new SimpleDateFormat("yyyy-MM-dd").parse(date);
		} catch (ParseException e) {
			return null;
		}
	}

	Customer customer;
	Booking booking;

	@Test
	void contextLoads() {
	}

	@Test
	public void customerHas1000Money(){
		customer = new Customer(1000, "Mrs", "Claire", "Ferguson", "claire@gmail.com", "Scottish");
		customerRepository.save(customer);
		assertEquals(1000, customer.getMoney());
	}

	@Test
	public void canFindBookingsLaterThanDate(){
		String dateString = "2021-08-10";
		Date date = valueOf(dateString);
		List<Booking> bookingsWithCorrectDate = bookingRepository.findAllByToDateGreaterThan(date);
		assertEquals(1, bookingsWithCorrectDate.size());
	}

	@Test
	public void canFindBookingByFromDate(){
		String dateString = "2021-08-21";
		Date date = valueOf(dateString);
		List<Booking> bookings = bookingRepository.findAllByFromDate(date);
		assertEquals(1, bookings.size());
	}

	@Test
	public void canFindBookingsBeforeDate(){
		customer = new Customer(1000, "Mrs", "Claire", "Ferguson", "claire@gmail.com", "Scottish");
		customerRepository.save(customer);
		String oneString = "2021-06-21";
		String twoString = "2021-06-23";
		Date fromDate = valueOf(oneString);
		Date toDate = valueOf(twoString);
		Booking newBooking = new Booking(102, oneString, twoString, 500.87, 2, 0, "Executive Double", customer);
		bookingRepository.save(newBooking);
		String dateString = "2021-08-21";
		Date date = valueOf(dateString);
		List<Booking> bookings = bookingRepository.findByFromDateBefore(date);
		assertEquals(102, bookings.get(0).getHotel_id());
	}

}
