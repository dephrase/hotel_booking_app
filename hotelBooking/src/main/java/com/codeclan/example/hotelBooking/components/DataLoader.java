package com.codeclan.example.hotelBooking.components;

import com.codeclan.example.hotelBooking.models.Booking;
import com.codeclan.example.hotelBooking.models.Customer;
import com.codeclan.example.hotelBooking.repositories.BookingRepository;
import com.codeclan.example.hotelBooking.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    BookingRepository bookingRepository;

    public DataLoader(){

    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Customer customer = new Customer(1000, "Mrs", "Claire", "Ferguson", "claire@gmail.com", "Scottish");
        customerRepository.save(customer);
//
//        Date fromDate = parseDate("2021-08-21");
//        Date toDate = parseDate("2021-08-25");
//
//        Booking booking = new Booking(101, fromDate, toDate, 500.87, 2, "Executive Double", customer);
//        bookingRepository.save(booking);
//
//        customer.addBooking(booking);
//        customerRepository.save(customer);
    }

    public static java.util.Date parseDate(String date) {
        try {
            return new SimpleDateFormat("yyyy-MM-dd").parse(date);
        } catch (ParseException e) {
            return null;
        }
    }
}
