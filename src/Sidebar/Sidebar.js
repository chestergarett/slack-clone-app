import React from 'react';
import "./Sidebar.css";
import 'boxicons';

export const Sidebar = () => {
    return (
        <div class="sidebar">
            <div class="logo-details">
                <div class="logo_name">Group 5</div>
                <box-icon name='edit' ></box-icon>
            </div>
    
            <ul class="nav-links">
                <li>
                    <a href="#">
                        <box-icon name='message-alt-detail' ></box-icon>
                        <span class="links_name">Threads</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <box-icon name='conversation' ></box-icon>
                        <span class="links_name">All DMs</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <box-icon name='file-blank' ></box-icon>
                        <span class="links_name">Drafts</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <box-icon name='message-alt-error' ></box-icon>
                        <span class="links_name">Mention & reactions</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <box-icon name='dots-vertical-rounded' ></box-icon>
                        <span class="links_name">More</span>
                    </a>
                </li>
                <li>
                    <div class="icon-link">
                    <a href="#">
                        <box-icon name='chevron-right-circle' ></box-icon>
                        <span class="links_name">Channels</span>
                    </a>
                    </div>
                    <ul class="sub-menu">
                        <li><a href="#"><box-icon name='lock-alt' ></box-icon>locked channel</a></li>
                        <li><a href="#"><box-icon name='lock-alt' ></box-icon>batch 9</a></li>
                        <li><a href="#"><box-icon name='lock-alt' ></box-icon>unlocked channel</a></li>
                        <li><a href="#"><box-icon name='lock-alt' ></box-icon>batch 10</a></li>
                    </ul>
                </li>
                <li>
                    <div class="icon-link">
                    <a href="#">
                        <box-icon name='chevron-right-circle' ></box-icon>
                        <span class="links_name">Direct Messages</span>
                    </a>
                    </div>
                    <ul class="sub-menu">
                        <li><a href="#"><box-icon name='user-circle' ></box-icon>Andy</a></li>
                        <li><a href="#"><box-icon name='user-circle' ></box-icon>Brando</a></li>
                        <li><a href="#"><box-icon name='user-circle' ></box-icon>Chester</a></li>
                        <li><a href="#"><box-icon name='user-circle' ></box-icon>Michael</a></li>

                    </ul>
                </li>
            </ul>
        </div>
    )
}